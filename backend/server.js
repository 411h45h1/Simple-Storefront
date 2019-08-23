const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ msg: "api started" }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/content", require("./routes/Content"));
app.use("/api/users", require("./routes/users"));

// looks for an env variable named port during production or port 5k
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
