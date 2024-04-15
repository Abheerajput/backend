const mongoose = require('mongoose');

const URI = "mongodb://127.0.0.1:27017/gymDB";

const connectDb = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit with a non-zero code to indicate failure
  }
};

// Call connectDb function to establish the database connection
connectDb().then(() => {
  console.log("Database connection established");
}).catch((error) => {
  console.error("Failed to establish database connection:", error);
});

module.exports = connectDb;