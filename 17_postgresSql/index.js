"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    database: "postgres",
    password: "123456",
});
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("successfully connected to the database");
        }
        catch (err) {
            console.log("Database connection failed", err.stack);
        }
    });
})();
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
    
    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `);
        console.log(result);
    });
}
function insertValuesToTable(username, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = "INSERT INTO users (username, email) VALUES ($1, $2)";
        const values = [username, email];
        const result = yield client.query(query, values);
        console.log(result);
    });
}
function printTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`SELECT * FROM users`);
        console.log("This is result:", result.rows);
        const [object] = result.rows;
        console.log(object);
    });
}
createTable();
insertValuesToTable("MohdSameer", "example@gmail.com");
printTable();
