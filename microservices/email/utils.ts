import { Structure } from "../../types/ConfigMail";
require("dotenv").config();
const { mail } = process.env

const validateFrom = (from: any): string => {
    if (!isEmail(from)) {
        throw new Error("Incorrect or email from")
    }
    return from
}
const validateTo = (to: any): string => {
    if (!isEmail(to)) {
        throw new Error("Incorrect or Email to")
    }
    return to
}
const validateSubject = (subject: any): string => {
    if (!isString(subject)) {
        throw new Error("Incorrect or string subject")
    }
    return subject
}
const validateMessage = (message: any): string => {
    if (!isString(message)) {
        throw new Error("Incorrect or string message")
    }
    return message
}
const validateName = (name: any): string => {
    if (!isString(name)) {
        throw new Error("Incorrect or string name")
    }
    return name
}
const isString = (string: any): boolean => {
    return (typeof string === "string" || string instanceof String)
}
const isEmail = (email: any): boolean => {
    return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
}

export function validateJson(jsonRequest: any): Structure {
    var newJson: Structure = {
        from: validateFrom(jsonRequest.email),
        to: validateTo(mail),
        subject: validateSubject(jsonRequest.subject),
        html: validateMessage(jsonRequest.message) +" "+ validateName(jsonRequest.name)+", email from: "+validateFrom(jsonRequest.email)
    };
    return newJson;
}