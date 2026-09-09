// App entry point placeholder
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "QR Food Ordering API Running"
    });
});

app.use(errorHandler);
app.use("/api/v1/auth", authRoutes);



module.exports = app;