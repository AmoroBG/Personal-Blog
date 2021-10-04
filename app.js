const express = require("express")

const app = express()

// Global Variables
const firstPost = "This is the first post in my blog"

// Public Folder
app.use(express.static("public"))

// body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// EJS
app.set("view engine", "ejs")

// Routes

app.get("/", function(req, res) {
    res.render("home.ejs", { firstPost: firstPost })
})

// Server

const PORT = 3000 | process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})