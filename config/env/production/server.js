module.exports = ({ env }) => ({
  proxy: true,
  port: env.int("PORT", 8080),
  url: env("https://connyspiler.azurewebsites.net/"), // replaces `host` and `port` properties in the development environment
  app: {
    keys: env.array("APP_KEYS"),
  },
});
