require("dotenv").config({ path: "varriables.env" });
const createServer = require("createServer");
const db = require("./db");

const server = createServer();

// TODO Use express middleware to handle cookies (JSONM Web Tokens)
// TODO Use express middleware to populate current user
