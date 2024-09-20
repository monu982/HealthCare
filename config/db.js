const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/healthcare";
const dbURL = process.env.ATLASDB_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://delta-student:YEr5bdeKVVguYdTl@cluster.6ucqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"
    );
    console.log("connection successful");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
