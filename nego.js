const express = require("express");

const app = express();

app.set('view engine', 'ejs');

//Sayfa

app.get("/", (req,res) => {
  res.render("index");
  });

app.get("/discord", (req,res) => {
  res.redirect("");
  });

app.get("/github", (req,res) => {
  res.redirect("https://github.com/kardespro");
  });

app.get("/api", (req,res) => {
  res.redirect("https://api.negodev.tk");
  });

app.get("/greesy", (req,res) => {
  res.redirect("https://greesy.negodev.tk");
  });




const listener = app.listen(process.env.PORT, () => {
  console.log("Sunucu Portu :  " + listener.address().port);
});
