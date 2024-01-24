import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const URI = process.env.URI;
const DB = process.env.DB || "MONGO";
const BASE = process.env.BASE || "instacloneDB";

export default {
    PORT,
    URI,
    DB,
    BASE,
};