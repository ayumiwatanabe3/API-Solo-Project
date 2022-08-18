const config = require("./knexfile");
const knex = require("knex")(config);

module.exports = {
  getAllCity(limit = 100) {
    return knex
      .select({
        id: "id",
        city_name: "city_name",
        prefectures: "prefectures",
      })
      .from("city")
      .limit(limit);
  },

  getAllDate(limit = 100) {
    return knex
      .select({
        city_id: "city_id",
        date: "date",
      })
      .from("date")
      .limit(limit);
  },

  getAllPopulation(limit = 100) {
    return knex
      .select({
        city_id: "city_id",
        population: "population",
      })
      .from("population")
      .limit(limit);
  },

  getAllColumn(limit = 100) {
    return knex
      .select({
        city_id: "city.id",
        city_name: "city.city_name",
        prefectures: "city.prefectures",
        date: "date.date",
        population: "population.population",
      })
      .from("city")
      .join("date", { "city.id": "date.city_id" })
      .join("population", { "city.id": "population.city_id" })
      .limit(limit);
  },

  createCity(city) {
    return knex.insert(city).into("city");
  },

  updateCity(id, city) {
    return knex("city")
      .where("id", id)
      .update(city)
      .returning("id")
      .then((res) => res[0].id);
  },

  deleteCity(id) {
    return knex("city").where("id", id).del();
  },
};
