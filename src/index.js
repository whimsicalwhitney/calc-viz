const express = require('express')
const {applicationRoutes} = require('./routes/index.routes')

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

app.use(express.json())

app.use(applicationRoutes)

module.exports = {app}
