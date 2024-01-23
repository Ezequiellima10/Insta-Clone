import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const URI = process.env.URI || "mongodb://localhost";
const DB = process.env.DB || "MONGO";
const BASE = process.env.BASE || "instaDB";

export default {
    PORT,
    URI,
    DB,
    BASE,
};