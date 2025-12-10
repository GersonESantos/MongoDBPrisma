import express from 'express';
import { prisma } from './utils/prisma.js';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/usuarios', async (req, res) => {
  const users = await prisma.user.findMany()

  res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
