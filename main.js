import { getJsonData } from './1-basic-fetch.js';
import Users from './data/users.json';

const url = 'https://restcountries.com/v3.1/all';
const url2 = 'https://api.publicapis.org/entries';

// getJsonData(dinosaurs);


fetch('./data/users.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));