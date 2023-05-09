const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
const port = process.env.PORT || 8000
const staticPath = path.join(__dirname, "../public")
const templatesPath = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")





// Static serve
app.use(express.static(staticPath))

// using hbs
app.set("view engine", "hbs")
app.set("views", templatesPath)

hbs.registerPartials(partials_path)
// Routing
app.get("/", (req, res) => {
     res.render("home ")
})
app.get("/about", (req, res) => {
     res.render("about")
})
app.get("/weather", (req, res) => {
     res.render("weather")
})

// Error page
app.get("/*", (req, res) => {
     res.render("404error")
})


// Listening
app.listen(port, () => {
     console.log(`Running at Port ${port}`)
})