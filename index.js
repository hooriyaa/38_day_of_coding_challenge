"use strict";
// QUESTION 112:
const countries = new Map();
countries.set("USA", "Washington, D.C");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
console.log(countries);
// QUESTION 113:
function logCapitalOfCanada(countries) {
    if (countries.has("canada")) {
        console.log(`The capital of canada is${countries.get("canada")}`);
    }
    else {
        console.log("Canada is not in the map.");
    }
}
logCapitalOfCanada(countries);
// QUESTION 114:
const students = new Map();
students.set(1001, "Hooriya");
students.set(1002, "Malahim");
students.set(1003, "Mahnoor");
students.set(1004, "Hira");
students.set(1005, "Masood");
students.forEach((name, id) => {
    console.log(`Student Id: ${id} , Student Name: ${name}`);
});
