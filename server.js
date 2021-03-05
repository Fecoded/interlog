const express = require('express');
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
// const connectDB = require("./config/db");

const app = express();
// Load Config
dotenv.config({ path: "./config/.env" });


// Parse Middleware
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const user = require("./routes/userRoute");
const customer = require("./routes/customerRoute");
const product = require("./routes/productRoute");
const transaction = require("./routes/transactionRoute");

// Register Routes
app.use("/api/v1/user", user);
app.use("/api/v1/customer", customer);
app.use("/api/v1/product", product);
app.use("/api/v1/transaction", transaction);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`Server started on ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
    // Set Static folder
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
  }