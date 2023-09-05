const nodemailer = require("nodemailer");
require("dotenv").config();

const { MAILTRAP_USER, MAILTRAP_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_PASSWORD,
  },
});

const sendEmail = async (data) => {
  const message = { ...data, from: "anna.komp24@gmail.com" };
  await transport.sendMail(message);
  return true;
};

module.exports = sendEmail;
