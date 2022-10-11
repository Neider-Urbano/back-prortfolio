"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require("express");
const controller_1 = __importDefault(require("./controller"));
const routerMail = Router();
routerMail.post("/mail", controller_1.default);
routerMail.get("/mail", (_req, res) => {
    res.send("route mail");
});
exports.default = routerMail;
