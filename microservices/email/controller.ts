import Transporter from "./transporter";
import { validateJson } from "./utils";

const postMail= async(_req: any, res: any) => {
    try {
        var jsonMail=validateJson(_req.body);
        const newTransporter = new Transporter();
        newTransporter.createTransport();
        let sendMail=await newTransporter.sendMailer(jsonMail);
        res.send(sendMail)
    } catch (error:any) {
        res.send(error.message).status(400)
    }
}

export default postMail;