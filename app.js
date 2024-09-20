const express = require("express");
const app = express();
const connectDB = require("./config/db.js");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// connect to MongoDB
connectDB();

// Routes
app.use("/api", require("./routes/service.js"));

// Start the server
app.listen(8080, () => {
  console.log("server is listing to port :8080");
});
