const express = require("express");
const mongodb = require("mongoose");
// const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());
mongodb
  .connect(
    "mongodb+srv://pksroot:newpass123@perfectkode.lxygjo8.mongodb.net/anshika?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));
const uLogin = require("./route/user.route");
app.use("/api/auth", uLogin);
console.log("Server ");
app.listen(8080);
