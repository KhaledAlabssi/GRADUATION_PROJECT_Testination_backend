require('dotenv').config()
const nodemailer = require('nodemailer');

const SentQuoteEmail = (req, res) => {
    const output = `
    <p>Here is your Credentials for your test!</p>
    <h3>Your Username: ${req.body.email}</h3>
    <h3>Your Password: ${req.body.password}</h3>
    <p>Please use the credentials shared above to access your test: link</p>
    `;

    //Step 1
    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    //Step 2
    let mailOptions = {

        from: 'credentials@testination.com',
        to: `${req.body.email}`,
        //cc: 'khaled.absi5@gmail.com',
        //bcc: 'khaled.absi5@gmail.com',
        subject: 'Your Credentials in testination.net',
        text: 'Email with template',
        html: output
    };

    //Step 3
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('error happened', error)
        } else {
            // console.log('email sent', info.messageId);
            // console.log('preview URL:%s', nodemailer.getTestMessageUrl(info));
            //res.render('contact',{layout:false},{msg:'Email has been sent'})
            // res.render('contact', { layout: false, msg: 'Email Has been sent' });
        }
    });
}

module.exports = { SentQuoteEmail }