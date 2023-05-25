import { getJsonData } from './1-basic-fetch.js';
import { getUsers } from './data/users.js';
import { getEmployees } from './data/employees.js'
import { getUsers as userNames } from './data/names.js'
import { getCountries } from './data/countries.js'
// import user from './data/employees.json';
const url = 'https://restcountries.com/v3.1/all';
const url2 = 'https://api.publicapis.org/entries';

// getJsonData(dinosaurs);

// console.log(getUser)
// fetch('../data/users.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// let data = getUsers();
// let a = _.uniqBy(data, "favoriteFruit")
// console.log(a);

const data = getCountries();

let output = _.filter(data, ["name.common", "India"]);
console.log(output);
