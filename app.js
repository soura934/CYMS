const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');

const users = require("./routes/api/users");
const User = require('./models/User');
const products = require('./routes/api/products');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {res.send("Hello");});

app.use("/api/users", users);
app.use("/api/products", products)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));