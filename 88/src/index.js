import express from 'express';
import { prisma } from './utils/prisma.js'; // Importa o prisma

const app = express();
const port = 3000;

app.use(express.json()); // Adiciona o middleware para ler JSON

// Rota GET para listar todos os usuários
app.get('/usuarios', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Rota POST para criar um novo usuário
app.post('/usuarios', async (req, res) => {
  const newUser = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(201).json(newUser);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});