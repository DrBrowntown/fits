require("dotenv").config({ path: "varriables.env" });
const createServer = require("createServer");
const db = require("./db");

const server = createServer();
