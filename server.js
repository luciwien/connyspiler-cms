"use strict";
const strapi = require("./node_modules/strapi/lib/index");

console.log(env("NODE_ENV"));
console.log(env("DATABASE_HOST"));
console.log(env("DATABASE_NAME"));
console.log(env("DATABASE_USERNAME"));
console.log(env("DATABASE_PASSWORD"));

strapi().start();
