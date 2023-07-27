// import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "82681738ac6a60662dd267d3d73cc6b84312ebc507ff0f25977b718a2669bc35",
        input: { input_text: req.body.input},
      }),
    });
    console.log(response);

    if (response.status !== 201) {
      const error = await response.json();
      res.statusCode = 500;
      res.end(JSON.stringify({ detail: error.detail }));
      return;
    }

    const prediction = await response.json();
    console.log(prediction);
    res.statusCode = 201;
    res.end(JSON.stringify(prediction));
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: 'Internal Server Error' }));
  }
}
