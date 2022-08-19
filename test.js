const { expect, assert } = require("chai");
const config = require("./knexfile");
const knex = require("knex")(config);
const models = require("./model");

describe("city", () => {
  const testCity = {
    id: 100,
    city_name: "中央区",
    prefectures: "東京都",
  };

  before(async () => {
    await knex("city")
      .insert(testCity)
      .returning("id")
      .then((result) => {
        console.log("inserted test city");
      })
      .catch(console.error);
  });

  after(async () => {
    await knex("city")
      .where("id", testCity.id)
      .returning("id")
      .del()
      .then((result) => {
        console.log("removed test city");
      })
      .catch(console.error);
  });

  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration", () => {
      knex("city")
        .select()
        .catch(() => assert.fail("city table is not found."));
    });
  });
  describe("getAllCity", () => {
    it("should return an array of city", async () => {
      const cities = await models.getAllCity();
      expect(cities).to.be.an.instanceof(Array);
    });

    it("should accept a limit argument", async () => {
      const cities = await models.getAllCity(3);
      expect(cities.length).to.be.at.most(3);
    });
  });
  describe("createCity", () => {
    const newId = 9999;

    after(async () => {
      await knex.from("city").where("id", newId).del().catch(console.error);
      console.log("Deleted test case");
    });

    it("should be able to create a new city", async () => {
      const newCity = {
        id: newId,
        city_name: "那覇市",
        prefectures: "沖縄県",
      };

      const id = await models.createCity(newCity);
      const city = await knex("city").select().where("id", newId).first();
      expect(city).to.exist;
      expect(city.id).to.eq(newId);
    });
  });

  describe("updateCity", () => {
    describe("with valid parameters", () => {
      after(async () => {
        await knex("city")
          .update({
            city_name: "中央区",
          })
          .where("id", testCity.id)
          .returning("id")
          .then((result) => {
            console.log("updated test customer");
          })
          .catch(console.error);
      });

      it("should return the id", async () => {
        const id = await models.updateCity(testCity.id, {
          city_name: "港区",
        });
        expect(id).to.eq(testCity.id);
      });

      it("should update the city name", async () => {
        const cityName = await knex("city")
          .select("city_name")
          .where("id", testCity.id);
        expect(cityName[0].city_name).to.eq("港区");
      });
    });
  });
  describe("deleteCity", () => {
    it("should delete the city", async () => {
      const sample = {
        id: 200,
        city_name: "江戸川区",
        prefectures: "東京都",
      };

      await knex("city").insert(sample).catch(console.error);
      const result = await knex("city").select("city_name").where("id", 200);
      expect(result[0].city_name).to.eq("江戸川区");

      const beforeArr = await models.getAllCity();
      await models.deleteCity(sample.id);
      const afterArr = await models.getAllCity();
      expect(afterArr.length).to.eq(beforeArr.length - 1);
    });
  });
});

describe("date", () => {
  // const testCity = {
  //   id: 150,
  //   city_name: "中央区",
  //   prefectures: "東京都",
  // };
  // const testDate = {
  //   city_id: 150,
  //   date: "2000-01-01",
  // };

  // before(async () => {
  //   await knex("city").insert(testCity);
  //   await knex("date").insert(testDate);
  // });

  // after(async () => {
  //   await knex
  //     .from("city")
  //     .where("id", testCity.id)
  //     .del()
  //     .catch((error) => console.error(error));

  //   await knex
  //     .from("date")
  //     .where("city_d", testCity.id)
  //     .del()
  //     .catch((error) => console.error(error));
  // });

  // dateテーブルはあるか
  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration", () => {
      knex("date")
        .select()
        .catch(() => assert.fail("date table is not found."));
    });
  });
  // getAllDateは動くか
  describe("getAllDate", () => {
    it("should return an array of date", async () => {
      const dates = await models.getAllDate();
      expect(dates).to.be.an.instanceof(Array);
    });

    it("should accept a limit argument", async () => {
      const dates = await models.getAllDate(3);
      expect(dates.length).to.be.at.most(3);
    });
  });
  // getByIdは動くか
  // post
  // describe("createDate", () => {
  //   after(async () => {
  //     await knex
  //       .from("date")
  //       .where("city_id", newId)
  //       .del()
  //       .catch(console.error);
  //     console.log("Deleted test case");
  //   });

  //   it("should be able to create a new date", async () => {
  //     const newDate = {
  //       city_id: testCity.id,
  //       date: "2022-08-18",
  //     };

  //     const id = await models.createDate(newDate);
  //     const date = await knex("date")
  //       .select()
  //       .where("city_id", testCity.id)
  //       .first();
  //     expect(date).to.exist;
  //     expect(date.city_id).to.eq(testCity.id);
  //   });
  // });

  // patch
  // delete
});

describe("population", () => {
  // populationテーブルはあるか
  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration", () => {
      knex("population")
        .select()
        .catch(() => assert.fail("population table is not found."));
    });
  });
  // getAllPopulationは動くか
  it("should return an array of population", async () => {
    const populations = await models.getAllPopulation();
    expect(populations).to.be.an.instanceof(Array);
  });

  it("should accept a limit argument", async () => {
    const populations = await models.getAllPopulation(3);
    expect(populations.length).to.be.at.most(3);
  });
  // getByIdは動くか
  // post
  // patch
  // delete
});

describe("allColumn", () => {
  it("should return an array of allColumn", async () => {
    const allColumnData = await models.getAllColumn();
    expect(allColumnData).to.be.an.instanceof(Array);
  });

  it("should accept a limit argument", async () => {
    const allColumnData = await models.getAllColumn(3);
    expect(allColumnData.length).to.be.at.most(3);
  });
});
