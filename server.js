require("dotenv").config();

require("./src/config/env");

const app = require("./src/app");

const connectDB = require("./src/config/dbConnection");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server Running : http://localhost:${PORT}`);

});