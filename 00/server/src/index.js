import express from 'express'
import { PrismaClient }  from '@prisma/client'

const app = express()
const port = 3000
const prisma = new PrismaClient(); // <-- instancie aqui

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.send('OK')
})

app.get('/status', (req, res) => {
  res.json({ status: 'running', uptime: process.uptime() })
})

app.get('/time', (req, res) => {
  res.json({ time: new Date().toISOString() })
})

app.get('/echo/:message', (req, res) => {
  const message = req.params.message
  res.json({ echo: message })
})
app.get('/headers', (req, res) => {
  res.json({ headers: req.headers })
})

app.get('/usuarios', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
