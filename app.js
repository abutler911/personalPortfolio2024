const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public")); // to serve static files like CSS, JS, images

app.get("/", (req, res) => {
  res.render("index"); // your EJS file for the homepage
});

app.get("/projects", (req, res) => {
  // Fetch projects from MongoDB and pass them to the EJS template
});

app.get("/resume", (req, res) => {
  // Serve your resume page or PDF
});

app.get("/contact", (req, res) => {
  // Serve your contact form page
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
