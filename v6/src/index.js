import express from 'express';
import { prisma } from './utils/prisma.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/usuarios', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post('/usuarios', async (req, res) => {
  const newUser = await prisma.user.create({
    data: req.body,
  });
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});