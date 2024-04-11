/* import { transporter } from "../utils/nodemailer.js";
 */
export const emailController=async (req,res)=>{
    console.log("entro aca")
    const {email,tema,mensaje}=req.body
    console.log("body del email",req.body)
    try {
        await transporter.sendMail({
            from: email,
            to:"joaquinfefe@gmail.com",
            subject: tema,
            html:mensaje ,
          });
          res.status(200).json({message:"email enviado"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}