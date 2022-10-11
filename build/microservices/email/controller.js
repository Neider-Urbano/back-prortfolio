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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transporter_1 = __importDefault(require("./transporter"));
const utils_1 = require("./utils");
const postMail = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var jsonMail = (0, utils_1.validateJson)(_req.body);
        const newTransporter = new transporter_1.default();
        newTransporter.createTransport();
        let sendMail = yield newTransporter.sendMailer(jsonMail);
        res.send(sendMail);
    }
    catch (error) {
        res.send(error.message).status(400);
    }
});
exports.default = postMail;
