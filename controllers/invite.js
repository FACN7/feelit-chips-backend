const jwt = require("jsonwebtoken");
const nodeoutlook = require("nodejs-nodemailer-outlook");
require("dotenv").config();

exports.inviteUser = (req, res) => {
  const invitedUserEMail = req.body.email;
  const invitedUserName = req.body.user;
  const twoHoursFromNow = Math.floor(Date.now() / 1000) + (120 * 60);
  jwt.sign({
    email: invitedUserEMail,
    exp: twoHoursFromNow
  }, process.env.SECRET, function (_err, token) {
    nodeoutlook.sendEmail({
      auth: {
        user: process.env.OUTLOOK_EMAIL,
        pass: process.env.OUTLOOK_PASSWORD
      },
      from: process.env.OUTLOOK_EMAIL,
      to: invitedUserEMail,
      subject: "Invitation to FeelIt app",
      html: `<h1>Hello ${invitedUserName}! You have been invited to the FeelIt App!</h1>
      <h4>here is the link for signup...</h4>
      <h4>it will expire in 2 hours!</h4>
      <a href="https://feelit.netlify.com/sign-up/${encodeURIComponent(token)}">
    Click Me!
  </a>`,
      onError: (e) => console.log(e),
      onSuccess: () => res.sendStatus(302)
    }
    );
  });
};
