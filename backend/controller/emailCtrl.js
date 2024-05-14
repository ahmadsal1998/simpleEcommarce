
const nodemailer= require("nodemailer");
const asyncHandler= require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
    let transporter = nodemailer.createTransport ({
    host: "smtp.gmail.com" ,
    port: 587,
    secure : false, // true for 465, false for other ports
    auth:{
    user: process.env.MAIL_ID, // generated ethereal user process .env.MAIL ID,
    pass: process.env.MP,// generated ethereal passwordp rocess . env. MP ,
    },
});

// send mail with defined transport object
let info = await transporter.sendMail({
    from: '"Hey 👻" <abc@gmail.com.com>', // sender address
    to: data.to, // Z ist of receivers
    subject: data.subject, // Subject line
    text: data.text, // plain text body
    html: data.htm, // html body
    });

    console.log("Message sent: %s", info.messageId);
 
    console.log("Preview URL: %s ", nodemailer.getTestMessageUrl(info));
    // Preview URL: https ://ethereal . emai l/message/WaQKMgKddxQDoou...


});
module.exports= sendEmail;
