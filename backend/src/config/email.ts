const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.openjavascript.info",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "test@openjavascript.info", // Replace with your SMTP server email
    pass: "", // Replace with your SMTP server password
  },
});

export default transporter;
