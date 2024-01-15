const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('main.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


 app.get("/", (req, res) => {
  const message = "Hello world";
  res.render('show', {mes:message});
});


  app.get("/groups/:name", (req, res) => {
  db.serialize( () => {
  db.all("select name, names, birth, country, position, comment2 from example where name =" + req.params.name + ";", (error, row) => {
  if( error ) {
  res.render('show', {mes:"エラーです"});
  }
  res.render('groups', {data:row});
  })
  })
  })

app.get("/groups", (req, res) => {
    db.serialize( () => {
        db.all("select id, name, company, date, comment from example;", (error, row) => {
            if( error ) {
                res.render('show', {mes:"エラーです"});
            }
            res.render('index', {data:row});
        })
    })
})





app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));