//Imports entire module including default export
//import * as dotenv from 'dotenv';

//regular import
// import dotenv from 'dotenv';
// dotenv.config();

import { config } from 'dotenv';
config();

console.log(process.env.DB_USERNAME);
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_URL);
