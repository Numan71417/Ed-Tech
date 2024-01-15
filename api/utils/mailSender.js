const nodemailer = require("nodemailer");

const mailSender = (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      // host: process.env.MAIL_HOST,
      // auth: {
      //   user: process.env.MAIL_USER,
      //   pass: process.env.MAIL_PASS,
      // },
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ndan51150@gmail.com",
        pass: "hprf pzcn zuha wokn",
      },
    });

    let info = transporter.sendMail({
      from: "SbDesigns",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
