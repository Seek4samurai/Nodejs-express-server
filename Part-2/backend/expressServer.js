const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  express.urlencoded({
    extended: true,
  }),
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.post("/answer", (req, res) => {
  const answer = parseInt(req.body.num1) + parseInt(req.body.num2);

  res.send({
    data: answer,
  });
});

app.get("/login", (req, res) => {
  res.send("User Created!");
});

app.listen(port, () => {
  console.log(`Server online on: ${port}`);
});
