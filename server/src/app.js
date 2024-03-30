const express = require("express");
const cors = require("cors");
const appRouter = require("./app/routes/index.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", appRouter);

app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

module.exports = app;
