const express = require("express");
const app = express();
const { products } = require("./Params/data");
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

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
     return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  res.status(200).json(sortedProducts);
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
