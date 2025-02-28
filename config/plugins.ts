export default ({ env }: { env: (key: string) => string }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.hostinger.com',
        port: 465,
        auth: {
          user: env('EMAIL_USER'),
          pass: env('EMAIL_PASS'),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_USER'),
        defaultReplyTo: env('EMAIL_USER'),
      },
    },
  }
});
