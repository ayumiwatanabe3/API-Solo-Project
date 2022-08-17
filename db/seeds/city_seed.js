/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("city").del();
  await knex("city").insert([
    { id: 1, city_name: "札幌市", prefectures: "北海道" },
    { id: 2, city_name: "仙台市", prefectures: "宮城県" },
    { id: 3, city_name: "さいたま市", prefectures: "埼玉県" },
    { id: 4, city_name: "千葉市", prefectures: "千葉県" },
    { id: 5, city_name: "横浜市", prefectures: "神奈川県" },
    { id: 6, city_name: "川崎市", prefectures: "神奈川県" },
    { id: 7, city_name: "相模原市", prefectures: "神奈川県" },
    { id: 8, city_name: "新潟市", prefectures: "新潟県" },
    { id: 9, city_name: "静岡市", prefectures: "静岡県" },
    { id: 10, city_name: "浜松市", prefectures: "静岡県" },
    { id: 11, city_name: "名古屋市", prefectures: "愛知県" },
    { id: 12, city_name: "京都市", prefectures: "京都府" },
    { id: 13, city_name: "大阪市", prefectures: "大阪府" },
    { id: 14, city_name: "堺市", prefectures: "大阪府" },
    { id: 15, city_name: "神戸市", prefectures: "兵庫県" },
    { id: 16, city_name: "岡山市", prefectures: "岡山県" },
    { id: 17, city_name: "広島市", prefectures: "広島県" },
    { id: 18, city_name: "北九州市", prefectures: "福岡県" },
    { id: 19, city_name: "福岡市", prefectures: "福岡県" },
    { id: 20, city_name: "熊本市", prefectures: "熊本県" },
  ]);
};
