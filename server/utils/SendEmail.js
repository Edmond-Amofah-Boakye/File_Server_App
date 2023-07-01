import dotenv from 'dotenv'
dotenv.config({path: './config/.env'})
import sgMail from '@sendgrid/mail'
const apiKey = process.env.SENDGRID_API_KEY
sgMail.setApiKey(apiKey)


class sendEmail{
  constructor(email, url, name){
    this.to = email,
    this.name = name,
    this.url = url
    this.from = process.env.EMAIL
  }

  send(subject, message, file){
    const msg ={
      to: this.to,
      from: this.from,
      subject,
      html: message,
      attachments: file
    }
    sgMail.send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        return console.error(error)
      })
  }


  verifyEmail(){
    const message =  `
        <center>
          <h1><strong>Welcome ${this.name}</strong></h1>
          <p style="font-size: 1rem;">
            To complete your registeration, kindly click
            on the link below to Verify your Account!!
          </p>
          <a href=${this.url}>
            <button
            style="
              color: white;
              background-color: blue;
              padding: 0.8rem 4rem;
              cursor: pointer;
              border: none;
              font-size: 1rem;
            "
          >VERIFY</button></a>
        </center>
    `
    this.send("Email Verification", message)
  }

  resetpassword(){
    const message =  `
        <center>
          <h1>You have requested for Password Reset</h1>
          <p style="font-size: 1rem;">
            Kindly click on the link below to Reset your password!!
            Link expires in 10 minutes time.
          </p>
          <a href=${this.url}>
            <button
            style="
              color: white;
              background-color: red;
              padding: 0.8rem 4rem;
              cursor: pointer;
              border: none;
              font-size: 1rem;
            "
          >RESET</button></a>
        </center>
    `
    this.send("Password Verification", message)
  }


  //sending file
  sendFile(messageBody, attach, title, fileType){
    const message =  `
        <center>
          <p style="font-size: 1rem;">${messageBody}</p>
        </center>
    `
    const file = [
      {
        content: attach,
        filename: title,
        type: fileType,
        disposition: "attachment"
      }
    ]
    this.send("File Attachment", message, file)
  }
}

export default sendEmail
