const express = require("express");

const app = express();

app.listen(3000);

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/agents", (req, res) => {
  res.sendFile("./agents.html", { root: __dirname });
});

app.get("/weapons", (req, res) => {
  res.sendFile("./weapons.html", { root: __dirname });
});

app.get("/maps", (req, res) => {
  res.sendFile("./maps.html", { root: __dirname });
});
app.get("/sprays", (req, res) => {
  res.sendFile("./sprays.html", { root: __dirname });
});

console.log("started");
