
var nodemailer = require("nodemailer");
const config = require('../config');

var smtpTransport = nodemailer.createTransport({

    service: "Gmail",
    auth: {
        user: config.MAIL_ID,
        pass: config.MAIL_PASS,
    }
});

const SendOtp = async (email, otp) => {

    var mailOptions = {
        from:`${"no-reply-otp-verification@XYZ.com"}`,
        to : `${email}`,
        subject : `Please don't reply to this mail`,
        html:   `<div >
                    <h3>
                        use this OTP to verify your XYZ account.<br>
                    </h3>
                    <div style="padding: 10px;background-color: #dedede;text-align: center; font-size: 40px ">
                            <p>${otp}</p>
                    </div>
                    <h3>Don't Reply</h3>
                </div>`,

    }

    await smtpTransport.sendMail(mailOptions, (error, response) => {
        if(error){
            console.log("ERROR");
            console.log(error);
        }else{
            console.log(response);
            // console.log("Message sent: " + response);
        }
        // smtpTransport.close();
    })
}

const sendOtpSuccess = async (email) => {

    var mailOptions = {
        from:`${"no-reply-otp-verification@XYZ.com"}`,
        to : `${email}`,
        subject : `Welcome to XYZ Education Ecosystem`,
        html:   `<div >
                    <h3>
                        Your XYZ account has been verified<br>
                    </h3>
                    <div style="padding: 10px;background-color: #dedede;text-align: center; font-size: 40px ">
                            <p>Happy Education</p>
                    </div>
                    <h3>Don't Reply</h3>
                </div>`,

    }

    await smtpTransport.sendMail(mailOptions, (error, response) => {
        if(error){
            console.log("ERROR");
            console.log(error);
        }else{
            console.log(response);
            // console.log("Message sent: " + response);
        }
        // smtpTransport.close();
    })
}

module.exports = {
    SendOtp : SendOtp,
    sendOtpSuccess : sendOtpSuccess,
    
};