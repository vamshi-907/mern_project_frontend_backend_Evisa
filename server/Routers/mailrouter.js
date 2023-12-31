const express = require("express");
const router = express.Router();
const nodeemailer = require("nodemailer")

//configuration smtp mail server
var otpStore='';
const transporter = nodeemailer.createTransport({
 host: "smtp.gmail.com",
 port: 587,
 secure: false,
 auth: {
    user:"vsv8639243604@gmail.com",
    pass:"sjui jjkq pttz gzwa",
 },
});

function generateOtp(){
    return Math.floor(10000 + Math.random() * 900000).toString();
}

router.post('/', async (req,res)=>{
    const email = req.body.email;
    const otp = generateOtp();
    otpStore=otp;
    console.log(otp);
    const mailOption = {
        from: "vsv8639243604@gmail.com",
        to: email,
        subject: "E-VISA OTP Verification",
        text: `this is your OTP:${otp} for your Login purpose`,
    }; 
    try {
        await transporter.sendMail(mailOption,(err,info)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(otp);
            console.log(`OTP email sent successfully to ${email}`);
        });
        res.status(200).json({
            message: `OTP email sent successfully.`,
        });
    } catch (err){
        console.error("Error sending OTP:",err);
        res.status(404).json({success: false,message: "error sending OTP"});
    }
});

router.post("/verify-otp",async (req,res)=>{
    const otp = req.body.otp;
    //get the expected otp from memory
    const expectedOTP = otpStore;
    //expected otp is not set, return the  error
    if(!expectedOTP){
        res.status(400).json({
            message: "expected otp not sent",
        });
        return res.status(400);
    }
    console.log(otp);
    console.log(expectedOTP);
    //verify the otp
    if(otp !== expectedOTP){
        res.status(401).json ({
                message: "otp is invalid"
            });
    return ;
    }
// the otp is valid
  return res.status(200).json({
    status:200,
    message: "otp verified successfully"
  });
});


module.exports = router;