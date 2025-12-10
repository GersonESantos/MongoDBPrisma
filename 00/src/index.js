import express from 'express';
const app = express()
const port = 3000

app.get('/', async(req, res) => {
  constuser
  res.send('Hello World!')
})
app.post('/usuarios', async (req, res) => {
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
