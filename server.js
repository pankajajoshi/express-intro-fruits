const express = require("express");
const app = express();

const fruits = require("./models/fruits.js");
const vegetables = require("./models/vegetables.js");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h1>Hello WISE TEAM !</h1>");
});

app.get("/fruits", (req, res) => {
  res.render("fruits/Index", {
    fruits: fruits,
  });
});

app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.render("fruits/Show", {
    fruit: fruits[req.params.indexOfFruitsArray],
  });
});

app.get("/vegetables", (req, res) => {
  res.render("vegetables/Index", {
    vegetables: vegetables,
  });
});
app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

app.get("/vegetables/:indexOfVegetablesArray", (req, res) => {
  res.render("vegetables/Show", {
    vegetable: vegetables[req.params.indexOfVegetablesArray],
  });
});

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
