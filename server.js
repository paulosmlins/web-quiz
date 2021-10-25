const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("./build"));
app.listen(PORT, (err) => {
  if (err) {
    path.resolve(__dirname, "client", "build", "index.html");
    return console.log(err);
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
