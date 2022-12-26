module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("AZURE_MYSQL_HOST", "localhost"),
      port: env.int("AZURE_MYSQL_PORT", 3306),
      database: env("AZURE_MYSQL_DATABASE", "strapi"),
      user: env("AZURE_MYSQL_USER", "root"),
      password: env("AZURE_MYSQL_PASSWORD", "root"),
      ssl: env.bool("AZURE_MYSQL_SSL", false),
    },
    debug: false,
  },
});
