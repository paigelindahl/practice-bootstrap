const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use('/public', express.static('public'));


app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/bs4", (req, res) => {
  res.render("bs4");
});

app.get("/grid", (req, res) => {
  res.render("grid");
});

app.get("/solo", (req, res) => {
  res.render("solo");
});

app.get("/angled", (req, res) => {
  res.render("angled");
})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});