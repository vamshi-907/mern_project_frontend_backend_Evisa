const express = require("express");
const router = express.Router();
const nodeemailer = require("nodemailer")

//configuration smtp mail server

const transporter = nodeemailer.createTransport({
 host: "smtp.gmail.com",
 port: 587,
 secure: false,
 auth: {
    user:"vsv8639243604@gmail.com",
    pass:"sjui jjkq pttz gzwa",
 },
});


router.post('/', async (req,res)=>{
    const email = req.body.email;
   const suggestion = req.body.suggestion;
    
    console.log(suggestion);
    const mailOption = {
        from: "vsv8639243604@gmail.com",
        to: email,
        subject: "Suggestion box ",
        text: `${suggestion} `,
    }; 
    try {
        await transporter.sendMail(mailOption,(err,info)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(`suggestion sent successfully to ${email}`);
        });
        res.status(200).json({
            message: `suggestion sent successfully.`,
        });
    } catch (err){
        console.error("Error sending suggestion:",err);
        res.status(404).json({success: false,message: "error sending suggestion"});
    }
});

  



module.exports = router;