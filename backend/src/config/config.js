import dotenv from "dotenv"

dotenv.config()
export default {
    gmail_nodemailer:process.env.GMAIL_NODEMAILER,
    pass_nodemailer:process.env.PASS_NODEMAILER,
}