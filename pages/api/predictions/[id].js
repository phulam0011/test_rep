// import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.replicate.com/v1/predictions/${req.query.id}`,
      {
        headers: {
          Authorization: `Token r8_1XCS7zi04nPb7jCLMVvR9RK3pJuMxC83wAeXz`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status !== 200) {
      const error = await response.json();
      res.status(500).json({ detail: error.detail });
    } else {
      const prediction = await response.json();
      res.status(200).json(prediction);
    }
  } catch (error) {
    res.status(500).json({ detail: 'Internal Server Error' });
  }
}
