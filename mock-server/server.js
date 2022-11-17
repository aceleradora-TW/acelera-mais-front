const express = require('express')
const cors = require('cors')

const app = express()
const port = 9000

const {
  loginResponse,
  userPage1Response,
  userPage2Response,
  emailVerificationResponse,
  hiringProcessResponse,
  challengeResponse,
  exerciseResponse
} = require('./mocks')

app.use(cors())

app.get('/', (req, res) => res.send("it's works!"))
app.post('/login', (req, res) => res.json(loginResponse))
app.get('/hiring_process', (req, res) => res.json(hiringProcessResponse))
app.post('/hiring_process', (req, res) => res.status(200))
app.patch('/hiring_process/:id', (req, res) => res.status(200))
app.delete('/hiring_process/:id', (req, res) => res.status(200))

app.get('/candidate', (req, res) => res.status(200))
app.get('/candidate/:id', (req, res) => res.status(200))
app.get('/candidate/challenge/hiring_process/:id', (req, res) => res.status(200))
app.post('/candidate/hiring_process/:id', (req, res) => res.status(200))

app.get('/evaluation', (req, res) => res.status(200))
app.get('/evaluation/:id', (req, res) => res.status(200))
app.patch('/evaluation/:id', (req, res) => res.status(200))
app.post('/evaluation', (req, res) => res.status(200))
app.delete('/evaluation/:id', (req, res) => res.status(200))

app.get('/challenge', (req, res) => res.json(challengeResponse))
app.get('/challenge/:id', (req, res) => res.status(200))
app.patch('/challenge/:id', (req, res) => res.status(200))
app.post('/challenge/hiring_process/:id', (req, res) => res.status(200))

app.post('/user', (req, res) => res.status(200))
app.get('/user', (req, res) => {
  const { page } = req.query || 1
  const userResponse = Number(page) > 1 ? userPage2Response : userPage1Response
  res.json(userResponse)
})
app.put('/user/:id', (req, res) => res.status(200))
app.put('/user/:id/email_verification', (req, res) => res.json(emailVerificationResponse))
app.delete('/user/:id', (req, res) => res.status(200))

app.get('/exercise/:id', (req, res) => res.json(exerciseResponse))
app.put('/exercise/:id', (req, res) => res.status(200))

app.listen(port, () => {
  console.info(`Mocking Server running in localhost:${port}`)
})
