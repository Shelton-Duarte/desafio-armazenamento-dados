const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./connect/database");

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());

app.use("/api", require("./routes/user-route"));

app.listen(port, () =>
  console.log(`Aplicação rodando em http://localhost:${port}`)
);
