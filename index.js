const express = require('express')
const path = require("path")

const app = express()

app.set("port", process.env.PORT || 4000)

app.use(express.static(path.join(__dirname, "public")))

const server = app.listen(app.get("port"), () => {
    console.log(`SERVER RUNNING IN PORT ${app.get("port")}`)
  })