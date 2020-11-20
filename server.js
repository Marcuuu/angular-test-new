const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

var corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true)
    }
    else {
      callback(new Error("Origin not allowed by CORS"))
    }
  }
}

app.options("*", cors(corsOptions))

const allowedOrigins = [
  "capacitor://localhost",
  "http://localhost",
  "http://localhost:4200",
  "http://localhost:8000",
  "http://localhost:8080",
  "http://localhost:8100",
  "http://localhost:8101"
]

app.listen(8080, () => {
  console.log("server started!")
})

let messages = []
let count = 0

app.get('/', cors(corsOptions), (req, res) => {
  res.json({
    messages
  })
})

app.get('/api/messages', cors(corsOptions), (req, res) => {
  res.send(messages)
})

app.get('/api/messages/:name', cors(corsOptions), (req, res) => {
  const requestedName = req.params['name']
  res.json(`Welcome ${requestedName}`)
  console.log(requestedName)
})

app.post('/api/add-message', cors(corsOptions), (req, res) => {
  const name = req.body.messageData['name']
  const day = new Date().getDay()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  const date = day + '/' + month + '/' + year
  const message = req.body.messageData['message']
  console.log(req)

  messages.push({
    id: count,
    name: name,
    date: date,
    message: message
  })
  res.status(201).send({
    id: count,
    name: name,
    date: date,
    message: message
  })
  count++
})

app.put('/api/update-message', cors(corsOptions), (req, res) => {
  let index = parseInt(req.body.updateMessageData.index, 10)
  for (let message of messages) {
    if (message.id == index) {
      message.oldName = message.name
      message.newName = req.body.updateMessageData.name
      message.message = req.body.updateMessageData.message
      delete message.name
    }
  }
})
