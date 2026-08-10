import express from "express";
const app = express();
const PORT = 3000;
// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Home Page");
});
// About route
app.get("/about", (req, res) => {
    res.send("This is the About Page");
});
// Contact route
app.get("/contact", (req, res) => {
    res.send("This is the Contact Page");
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
