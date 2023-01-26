const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const authorize = require("./middleware/authorize");
app.use([ logger,authorize] );

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/product", (req, res) => {
  res.send("Product");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
