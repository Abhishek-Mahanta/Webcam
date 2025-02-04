require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const PORT = 4002;




// middleware

app.use(express.json());
app.use(cors());
app.use(router);

app.get("/",(req,res) => {
    res.status(200).json("server start");
})


app.listen(PORT, () => {
    console.log(`Server start at Port No :${PORT}`);
})