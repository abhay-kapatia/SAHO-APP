const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/file-download/:filename",  async (req, res) => {
    // await exec('java -jar decompress.jar downloads/a.txt downloads/a.txt')
    res.download("SAHO.exe", "SAHO.exe")
});

// app.get("/file-download", async function (req, res) {
//     res.render("file-download");
// });

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running at 3000");
  });