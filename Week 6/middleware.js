import express from "express";
const app = express();
const PORT = 3002;
// Custom Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log(`Time: ${new Date().toLocaleString()}`);
    next();
};
// Apply middleware
app.use(logger);
// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Home Page");
});
// About route
app.get("/about", (req, res) => {
    res.send("Welcome to the About Page");
});
// Students route
app.get("/students", (req, res) => {
    res.json([
        { id: 1, name: "Anu" },
        { id: 2, name: "Riya" }
    ]);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
