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

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});