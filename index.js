const exp = require("express");
const app = exp();
const nodemailer = require("nodemailer");
require("dotenv").config();

app.use(exp.static("public"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/send", async (req, res) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dorent.uf@gmail.com",
        pass: "Edualsd0412",
      },
    });

    await transport.sendMail({
      from: "dorent.uf@gmail.com",
      to: "noyar28451@mediafate.com",
      text: "Hello",
    });
    res.json({ status: "Success", message: "mail is sent" });
    console.log("mail has been sent");
  } catch (e) {
    res.json({ status: "error", message: e.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port);
