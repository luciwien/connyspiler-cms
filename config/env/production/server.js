module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://connyspiler.azurewebsites.net/"), // replaces `host` and `port` properties in the development environment
  app: {
    keys: env.array("APP_KEYS"),
  },
});
