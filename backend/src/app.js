import express from "express"
import nodemailer from "nodemailer"
import emailRouter from "./routes/email.router.js"
import cors from "cors"
import config from "./config/config.js";
import { dirname,join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"
import path from "path";
//ruta 
export const __dirname = join(dirname(fileURLToPath(import.meta.url)),"..");

const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* app.use(express.static(__dirname + "/public" *//* , {
  setHeaders: (res, path, stat) => {
      if (path.endsWith('.js')) {
          res.setHeader('Content-Type', 'text/javascript');
      }
  }

} *//* )); */

//cors
app.use(cors());
// Middleware para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: config.gmail_nodemailer, // Cambiar por tu correo electrónico
            pass: config.pass_nodemailer // Cambiar por tu contraseña
        }
    });
    transporter.verify().then(() => {
        console.log("Ready for send email")
    }).catch((err) => {
        console.log(err.message)
        console.log("error email")
    })

app.get('/descargar-archivo', function(req, res) {
    console.log("ascas")
        const archivoPath = path.join(__dirname,'src', 'public', 'Cv-fernandezJoaquin.pdf');

        res.download(archivoPath,'Cv-fernandezJoaquin.pdf', function(err) {
            if (err) {
                console.error("Error al descargar el archivo:", err); // Manejar errores de descarga
                res.status(500).send("Error al descargar el archivo");
            } else {
                console.log("Archivo descargado correctamente"); // Mensaje de éxito
            }}); // Descargar el archivo
    });
// Ruta para enviar el correo electrónico
app.post("/enviar-email", (req, res) => {
    const { name, email, mensaje ,tema} = req.body;
    console.log("easdas")
    console.log(req.body)

    
    // Configurar el correo electrónico
    let mailOptions = {
        from: email, // Cambiar por tu correo electrónico
        to: "joaquinfefe@gmail.com", // Cambiar por la dirección de correo de destino
        subject: `tema: ${tema}`,
        text: `${mensaje}\n\nContacto: ${name} <${email}>`
    };
    console.log(mailOptions)
    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
        } else {
            console.log("Email enviado: " + info.response);
            res.status(200).send("¡El mensaje ha sido enviado correctamente!");
        }
    });
});


/* //route
app.use("/api/email",emailRouter)
 */
const httpServer = app.listen(3000, () => {
    console.log("Escuchando al puerto 3000");
  });