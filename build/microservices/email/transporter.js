"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const { smtp, mail, password } = process.env;
const nodemailer = require("nodemailer");
class Transporter {
    constructor() {
        this.host = smtp;
        this.port = 587;
        this.secure = false;
        this.auth = {
            user: mail,
            pass: password,
        };
    }
    createTransport() {
        const jsonMail = {
            host: this.host,
            port: this.port,
            secure: this.secure,
            auth: this.auth
        };
        this.createTransporter = nodemailer.createTransport(jsonMail);
        return "created transporter";
    }
    sendMailer(mailInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let mail = yield this.createTransporter.sendMail(mailInfo);
            console.log("Message sent: %s", mail.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mail));
            return "mail send";
        });
    }
}
exports.default = Transporter;
