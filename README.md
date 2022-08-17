# API-Solo-Project

このリポジトリはCode Chrysalisの生徒であるときに作成しました.

(This was created during my time as a student at Code Chrysalis）


### DB - ordinance_designated_city

### table - city

table city {

id int [pk]

city_name str [not null, unique]

prefectures str [not null]

}
 

### table - date

tabele date {

city_id int [ref: city.id, not null]

date str [not null]

}

### table - population

table population {

city_id  int [ref: city.id, not null]

population int  [not null]

}
