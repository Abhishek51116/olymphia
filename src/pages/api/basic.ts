// src/pages/api/basic.ts

import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
};

export default handler;