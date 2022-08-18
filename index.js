const express = require("express");
// const knex = require("knex");
// const knexfile = require("./knexfile");
const models = require("./model");

// const path = require("path");

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.set("views", `${__dirname}/templates`);
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.render("pages/index");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getAllCity", async (req, res) => {
  const cities = await models.getAllCity();
  res.json(cities);
});

app.post("/postCity", async (req, res) => {
  const { id, city_name, prefectures } = req.body;

  const payload = {
    city_name: city_name,
    prefectures: prefectures,
  };

  let city;

  if (id) {
    city = await customerModel.update(id, payload);
  } else {
    city = await customerModel.create(payload);
  }

  res.redirect("/getAllCity");
});

app.get("/getAllDate", async (req, res) => {
  const dates = await models.getAllDate();
  res.json(dates);
});

app.get("/getAllPopulation", async (req, res) => {
  const populations = await models.getAllPopulation();
  res.json(populations);
});

app.get("/getAllColumn", async (req, res) => {
  const allColumnData = await models.getAllColumn();
  res.json(allColumnData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!!!`);
});
