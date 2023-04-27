const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const usersRouter = require('./services/user/users.routes')
const { db } = require('./config/db')
const eventlogger = require('./middleware/eventlogger')

const app = express()
app.use( express.json() )
app.use (cors())
dotenv.config()

const PORT = process.env.PORT||5000

app.use(eventlogger)
app.use('/api/users',  usersRouter)

app.listen(PORT,() => console.log(`server is running on  post ${PORT}`))

db()