console.log(env("NODE_ENV"));
console.log(env("DATABASE_HOST"));
console.log(env("DATABASE_NAME"));
console.log(env("DATABASE_USERNAME"));
console.log(env("DATABASE_PASSWORD"));

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    debug: false,
  },
});
