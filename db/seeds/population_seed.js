/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("population").del();
  await knex("population").insert([
    { city_id: 1, population: 1973329 },
    { city_id: 2, population: 1097237 },
    { city_id: 3, population: 1332196 },
    { city_id: 4, population: 978021 },
    { city_id: 5, population: 3775352 },
    { city_id: 6, population: 1540340 },
    { city_id: 7, population: 725924 },
    { city_id: 8, population: 784251 },
    { city_id: 9, population: 688625 },
    { city_id: 10, population: 786787 },
    { city_id: 11, population: 2325916 },
    { city_id: 12, population: 1453956 },
    { city_id: 13, population: 2750835 },
    { city_id: 14, population: 821598 },
    { city_id: 15, population: 1517073 },
    { city_id: 16, population: 721922 },
    { city_id: 17, population: 1196222 },
    { city_id: 18, population: 931551 },
    { city_id: 19, population: 1619585 },
    { city_id: 20, population: 738185 },
  ]);
};
