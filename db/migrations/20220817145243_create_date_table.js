exports.up = function (knex) {
  return knex.schema.createTable("date", function (table) {
    table.integer("city_id").references("id").inTable("city").notNullable();
    table.string("date").notNullable();
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("date");
};
