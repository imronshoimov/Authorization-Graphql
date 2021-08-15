import nodemailer from 'nodemailer'

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
    to: 'imronshoimov125@gmail.com',
    subject: 'Verification code',
    html: '<h1>Hello World</h1>'
}

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log(err);
    } else {
        console.log(info);
    }
})