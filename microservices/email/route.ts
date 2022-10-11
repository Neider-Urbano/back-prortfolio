const { Router } = require("express");
import postMail from "./controller"
const routerMail = Router();

routerMail.post("/mail",postMail)
routerMail.get("/mail",(_req:any, res:any)=>{
    res.send("hello world!")
})

export default routerMail;