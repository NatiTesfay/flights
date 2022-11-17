const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send(user)
})

app.listen(port, () => {
    console.log(`hello ${port}`)
}) 

