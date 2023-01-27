module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "mail.mymagenta.at"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"), //
          pass: env("SMTP_PASSWORD"), //
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "info@connyspiler.at",
        defaultReplyTo: "info@connyspiler.at",
      },
    },
  },
});
