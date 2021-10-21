const express = require("express")

const app = express()

// Global Variables
const firstPost = "This is the first post in my blog"
const aboutContent="This is our About. - We are creative and inspiring"
const contactContent="Contact us via mail and slack"
let postTitle=""
let postContent=""

// Public Folder
app.use(express.static("public"))

// body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// EJS
app.set("view engine", "ejs")

// ROUTES

// Home 
app.get("/", function(req, res) {
    res.render("home.ejs", { firstPost: firstPost, postTitle:postTitle, postContent:postContent })
})
// About
app.get("/about", function(req, res){
    res.render("about.ejs", {aboutContent:aboutContent})
})

// Contact
app.get("/contact", function(req, res){
    res.render("contact.ejs", {contactContent:contactContent})
})
// Compose - GET
app.get("/compose", function(req, res){
    res.render("compose.ejs")
})
// Compose - POST
app.post("/compose", function(req, res){
postTitle = req.body.title
postContent=req.body.content
 console.log(postTitle)
 console.log(postContent)
 res.redirect("/")
})

// STARTING THE SERVER

const PORT = 3000 | process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})