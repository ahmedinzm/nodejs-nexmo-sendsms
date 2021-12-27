const express = require("express")
const bodyParser = require("body-parser")
const Vonage = require('@vonage/server-sdk')
const ejs = require("ejs")
const port = 3000
const app = express()



app.set("view engine", "html")
app.engine("html", ejs.renderFile)
app.use(express.static(__dirname + '/static'))

app.get("/", (req, res) => {
    res.render('index')
})

const vonage = new Vonage({
    // https://dashboard.nexmo.com/
    apiKey: "",
    apiSecret: ""
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/", (req, res) => {
    const number = req.body.number
    const text = req.body.text
    vonage.message.sendSms("Vonage APIs", number, text)
})


const server = app.listen(3000, () => {
    console.log(`SERVER ${port} portta çalışıyor`)
})