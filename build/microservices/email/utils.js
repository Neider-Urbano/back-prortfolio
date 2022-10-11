"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJson = void 0;
require("dotenv").config();
const { mail } = process.env;
const validateFrom = (from) => {
    if (!isEmail(from)) {
        throw new Error("Incorrect or string from");
    }
    return from;
};
const validateTo = (to) => {
    if (!isEmail(to)) {
        throw new Error("Incorrect or string to");
    }
    return to;
};
const validateSubject = (subject) => {
    if (!isString(subject)) {
        throw new Error("Incorrect or string subject");
    }
    return subject;
};
const validateMessage = (message) => {
    if (!isString(message)) {
        throw new Error("Incorrect or string message");
    }
    return message;
};
const validateName = (name) => {
    if (!isString(name)) {
        throw new Error("Incorrect or string name");
    }
    return name;
};
const isString = (string) => {
    return (typeof string === "string" || string instanceof String);
};
const isEmail = (email) => {
    return ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(email));
};
function validateJson(jsonRequest) {
    var newJson = {
        from: validateFrom(jsonRequest.email),
        to: validateTo(mail),
        subject: validateSubject(jsonRequest.subject),
        html: validateMessage(jsonRequest.message) + " " + validateName(jsonRequest.name)
    };
    return newJson;
}
exports.validateJson = validateJson;
