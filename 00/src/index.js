import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post('/usuarios', async (req, res) => {
// ...existing code...
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  })

  res.status(201).json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
