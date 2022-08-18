const express = require("express");
const fs = require("fs");
// const knex = require("knex");
// const knexfile = require("./knexfile");
const models = require("./model");

// const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.render("pages/index");
// });

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/index.html");
  const msg = "トップページです!";
  res.render("index.ejs", {
    content: msg,
    link1: { href: "/getAllCity", text: "City" },
    link2: { href: "/getAllDate", text: "Date" },
    link3: { href: "/getAllPopulation", text: "Population" },
  });
});

app.get("/getAllCity", async (req, res) => {
  const cities = await models.getAllCity(100);
  res.json(cities);
});

app.get("/getAllDate", async (req, res) => {
  const dates = await models.getAllDate();
  res.json(dates);
});

app.get("/getAll", async (req, res) => {
  const all = await models.getAllColumn();
  res.json(all);
});

app.get("/getAllPopulation", async (req, res) => {
  const populations = await models.getAllPopulation();
  res.json(populations);
});

app.post("/postCity", async (req, res) => {
  if (Object.keys(req.body.addText).includes("id")) {
    await models
      .updateCity(id, req.body.addText)
      .catch((e) => console.error(e));
  } else {
    console.log("req.body.addText", req.body.addText);
    const insertObj = req.body.addText;
    await models.createCity(insertObj).catch((e) => console.error(e));
  }

  res.send(`CityDBに ${req.body.addText} を追加しました`);
});

app.post("/deleteCity", async (req, res) => {
  console.log("削除フォームのデータ", req.body.addText);
  await models.deleteCity(req.body.addText).catch((e) => console.error(e));
  res.send(`CityDBの id:${req.body.addText} のデータを削除しました`);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!!!`);
});
