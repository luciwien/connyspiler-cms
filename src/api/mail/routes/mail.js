module.exports = {
  routes: [
    {
      method: "POST",
      path: "/mail",
      handler: "mail.sendMail",
      config: {},
    },
  ],
};
