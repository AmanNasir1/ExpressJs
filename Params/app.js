const express = require("express");
const app = express();
const { products } = require("./data.js");
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1> <a href='/api/products'>Products</a>");
});
app.get("/api/products,1", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Found");
  }
  return res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
