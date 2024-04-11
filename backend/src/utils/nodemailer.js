import nodemailer from "nodemailer"
import config from "../config/config.js";
/* export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.gmail_nodemailer,
      pass: config.pass_nodemailer,
    },
  });
  
  transporter.verify().then(() => {
      console.log("Ready for send email")
  }).catch((err) => {
      console.log("error email")
  }); */