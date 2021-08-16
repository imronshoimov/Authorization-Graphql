import nodemailer from 'nodemailer'

function sendCode (email, code) {
    const transporter = nodemailer.createTransport({
        service: 'mail.ru',
        port: 587,
        secure: false,
        auth: {
            user: 'imronshoimov@mail.ru',
            pass: 'ZBMfQPR7tvy1VS0AB0Vb'
        }
    })
    
    const mailOptions = {
        from: 'imronshoimov@mail.ru',
        to: email,
        subject: 'Verification code',
        html: '<p>your code: ' + code + '</p>'
    }
    
    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
}

export default sendCode