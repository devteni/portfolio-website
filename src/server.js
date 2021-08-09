const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const router = express.Router();
const port = 5000


// create a transporter
const contact = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
        user: "fatunmbiteniola001@gmail.com",
        pass: "Spheroid1",
    }
})

contact.verify((error) => {
    if(error) console.log(error);
    else console.log("Ready to send");
})

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "fatunmbiteniola001@gmail.com",
        subject: "Hi Teni",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
  }

    contact.sendMail(mail, (error) => {
        if (error) return res.json({ status: "ERROR" });
        else return res.json({ status: "Message Sent" });
    });
});

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(port, () => console.log(`Server is running on ${port}`));