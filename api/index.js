import express from 'express'
const app = express()
const PORT = 3000

app.get('/api', function (req, res) {
  res.send("hello")
})

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
    console.log("yes")
})