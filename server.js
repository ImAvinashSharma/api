const express = require("express");
const app = express();

const PORT = 3200;
app.get("/", (req, res) => {
  res.json({ msg: "Hey" });
});

app.listen(PORT, () => {
  console.log(`${PORT} listening`);
});
