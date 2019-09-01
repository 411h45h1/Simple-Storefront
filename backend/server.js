//!!reminder: add image storage within the Shop model
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

//Init Middleware
// allows (req.body) to work in routes/users
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "api started" }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/shop", require("./routes/shop"));
app.use("/api/users", require("./routes/users"));

// looks for an env variable named port during production or port 5k
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
