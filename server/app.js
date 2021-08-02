if (process.env.NODE_ENV === "development") {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')
const routes = require('./routes')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
  console.log('server is running on PORT: ' + PORT)
})