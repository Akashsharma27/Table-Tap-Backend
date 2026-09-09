const required = [
    "PORT",
    "DB_HOST",
    "DB_NAME",
    "DB_USER",
    "JWT_SECRET"
];

required.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`${key} is missing in .env`);
    }
});