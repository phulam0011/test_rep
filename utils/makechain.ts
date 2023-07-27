import { OpenAI } from 'langchain/llms/openai';
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { ConversationalRetrievalQAChain } from 'langchain/chains';
import { CallbackManager } from 'langchain/callbacks';

const CONDENSE_PROMPT = `Đưa ra cuộc trò chuyện sau đây và một câu hỏi tiếp theo, hãy diễn đạt lại câu hỏi tiếp theo thành một câu hỏi độc lập.

Lịch sử trò chuyện:
{chat_history}
Theo dõi đầu vào: {question}
Câu hỏi độc lập:`;

const QA_PROMPT = `Bạn là một trợ lý SmartShark hữu ích. Bạn được cung cấp các phần được trích xuất sau đây của một tài liệu dài và một câu hỏi. 
Cung cấp một câu trả lời đàm thoại dựa trên context được cung cấp.
Bạn chỉ nên cung cấp các siêu liên kết tham chiếu context bên dưới. KHÔNG tạo nên hyperlinks.
Nếu bạn không thể tìm thấy câu trả lời trong context bên dưới, chỉ cần nói "Xin lỗi bạn, tôi không chắc là mình biết câu trả lời chính xác." Đừng cố tạo ra một câu trả lời.
Nếu câu hỏi không liên quan đến context, hãy trả lời bằng những thông tin mà bạn đã được cung cấp, dựa vào đó đưa ra câu trả lời tốt nhất.
Phải cung cấp câu trả lời của bạn bằng ngôn ngữ tiếng Việt và hãy đưa ra câu trả lời đầy đủ thông tin nhất.
{context}

Câu hỏi: {question}
ANSWER_LANGUAGE = Vietnamese
Câu trả lời hữu ích trong markdown:`;

export const makeChain = (
  vectorstore: PineconeStore,
  onTokenStream?: (token: string) => void,
) => {
// export const makeChain = (vectorstore: PineconeStore) => {
  const model = new ChatOpenAI({
    temperature: 1, // increase temepreature to get more creative answers
    modelName: 'gpt-3.5-turbo-16k', //change this to gpt-4 if you have access
    maxTokens: 4096,
    streaming: Boolean(onTokenStream),
      callbackManager: onTokenStream
        ? CallbackManager.fromHandlers({
            async handleLLMNewToken(token) {
              onTokenStream(token);
              console.log(token);
            },
          })
        : undefined,
  });

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorstore.asRetriever(),
    {
      qaTemplate: QA_PROMPT,
      questionGeneratorTemplate: CONDENSE_PROMPT,
      returnSourceDocuments: false, //The number of source documents returned is 4 by default
    
      // answerLanguage: 'Vietnamese',
    },
  );
  return chain;
};
