import {ConfigMail,Structure} from "../../types/ConfigMail"
require("dotenv").config();
const { smtp, mail, password } = process.env
const nodemailer = require("nodemailer");

class Transporter implements ConfigMail{
    host = smtp;
    port= 587;
    secure= false;
    auth= {
        user: mail,
        pass: password,
    };
    createTransporter:any;
    constructor() {}
    
    createTransport(){
        const jsonMail={
            host: this.host,
            port: this.port,
            secure: this.secure,
            auth: this.auth
        }
        this.createTransporter=nodemailer.createTransport(jsonMail);
        return "created transporter";
    }
    async sendMailer(mailInfo: Structure){
        let mail = await this.createTransporter.sendMail(mailInfo);
        console.log("Message sent: %s", mail.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mail));
        return "mail send"
    }
}

export default Transporter;

