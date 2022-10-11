const { Router } = require("express");
import postMail from "./controller"
const routerMail = Router();

routerMail.post("/mail",postMail)

export default routerMail;