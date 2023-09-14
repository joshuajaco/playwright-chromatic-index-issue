const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.redirect("/foo");
});

app.get("/foo", (req, res) => {
  res.send('<body>Hello World!</body><script src="/foo/bar.js"></script>');
});

app.get("/foo/bar.js", (req, res) => {
  res.send('console.log("hello world");');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
