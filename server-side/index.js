const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("MERN Authentication System Server is Running!");
});

app.listen(port, () => {
  console.log(`MERN Authentication System is running on ${port}`);
});
