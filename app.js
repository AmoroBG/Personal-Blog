const express = require("express")

const app = express()

// body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes

app.get("/", function(req, res) {
    res.send("Hello")
})

// Server

const PORT = 3000 | process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})