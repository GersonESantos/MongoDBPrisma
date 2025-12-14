import express from 'express'
import { prisma } from  './lib/prisma.js'
// const prisma = new PrismaClient()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/usuarios', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});


async function testConnection() {
  try {
    await prisma.$connect()
    console.log('🚀 conectado com sucesso')
  } catch (error) {
    console.log('erro na conecxao', error)
  }
}

testConnection()



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})











