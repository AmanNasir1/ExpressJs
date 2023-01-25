// const express = require("express");
// const app = express();

// // app.get
// app.get("/", (req, res) => {
//   res.send("Home Page");
// });
// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// // app.post
// // app.put
// // app.delete
// // app.all
// app.all("*", (req, res) => {
//   res.status(404).send("<h1>Resource Not Found</h1");
// });

// app.use

// app.listen

// app.listen(5000, () => {
//   console.log("Server is Listening on PORT: 5000");
// });

// ------------------------------------------------------------------

// const express = require("express");
// const path = require("path");
// const app = express();

// //  setup static and middleware

// // app.use(express.static());

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./index.html"));
// });

// app.all("*", (req, res) => {
//   res.status(404).send("resource not found");
// });

// app.listen(5000, () => {
//   console.log("Server is listening on Port 5000...");
// });
