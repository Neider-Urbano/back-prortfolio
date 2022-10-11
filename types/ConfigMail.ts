interface ConfigMail{
    readonly host?:string,
    readonly port: number,
    readonly secure: boolean,
    readonly auth:object,
    createTransport?:()=>void,
    sendMailer?:(mailInfo: Structure)=>void
}

type Structure= {
    readonly from:string, 
    readonly to: string,
    readonly subject: string,
    readonly html:string | undefined
}
export {ConfigMail, Structure}
