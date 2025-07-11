import express from "express";

const app = express();
const port = 3000;

// Set view engine to EJS
app.set("view engine", "ejs");

// Serve static files like CSS, images, etc. from "public" folder
app.use(express.static("public"));

// Root route
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
