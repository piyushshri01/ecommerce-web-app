const nodemailer = require('nodemailer');

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: "shri@gmail.com",
    pass: 'Create123@'
  }
});


module.exports = transporter