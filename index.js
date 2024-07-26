const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./connect/database");

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", require("./routes/user-route"));
app.use("/api/login", require("./routes/login-route"));
app.use("/api/signUp", require("./routes/signUp-route"));

app.listen(port, () => console.log(`Aplicação rodando em http://localhost:${port}`));