var express = require('express');
var app = express();


app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home")
});



const server = app.listen(8080, () => {
const host = server.address().address;
 const port = server.address().port;


console.log(`Example app listening at http://${host}:${port}`);
});