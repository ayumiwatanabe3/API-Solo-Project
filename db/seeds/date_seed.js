/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("date").del();
  await knex("date").insert([
    { city_id: 1, date: "1972-04-01" },
    { city_id: 2, date: "1989-04-01" },
    { city_id: 3, date: "2003-04-01" },
    { city_id: 4, date: "1992-04-01" },
    { city_id: 5, date: "1956-09-01" },
    { city_id: 6, date: "1972-04-01" },
    { city_id: 7, date: "2010-04-01" },
    { city_id: 8, date: "2007-04-01" },
    { city_id: 9, date: "2005-04-01" },
    { city_id: 10, date: "2007-04-01" },
    { city_id: 11, date: "1956-09-01" },
    { city_id: 12, date: "1956-09-01" },
    { city_id: 13, date: "1956-09-01" },
    { city_id: 14, date: "2006-04-01" },
    { city_id: 15, date: "1956-09-01" },
    { city_id: 16, date: "2009-04-01" },
    { city_id: 17, date: "1980-04-01" },
    { city_id: 18, date: "1963-04-01" },
    { city_id: 19, date: "1972-04-01" },
    { city_id: 20, date: "2012-04-01" },
  ]);
};
