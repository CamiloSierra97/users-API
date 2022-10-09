const express = require("express");

const app = express();

const port = 9000;

app.use(express.json());

const userRouter = require("./users/user.router");

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server OK!" });
});

app.use("/", userRouter)

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
