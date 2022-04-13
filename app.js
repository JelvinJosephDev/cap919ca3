const app = require("express")();

const PORT = process.env.PORT || 4000;

app.get("", (req, res) => {
  res.send("Jelvin Joseph - CAP 919 - CA3 - QUESTION 1");
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});