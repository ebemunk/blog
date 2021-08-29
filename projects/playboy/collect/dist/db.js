"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertObj = void 0;
var pg_1 = require("pg");
var bluebird_1 = __importDefault(require("bluebird"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var pool = new pg_1.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    Promise: bluebird_1.default,
});
function getPool() {
    return pool;
}
exports.default = getPool;
function insertObj(obj, table) {
    if (table === void 0) { table = '"playboy"."playmates"'; }
    var cols = Object.keys(obj).join(',');
    var valOrder = Object.keys(obj)
        .map(function (v, i) { return "$" + (i + 1); })
        .join(',');
    var sql = "\n\t\tINSERT INTO " + table + "\n\t\t(" + cols + ")\n\t\tVALUES\n\t\t(" + valOrder + ")\n\t";
    return [sql, Object.values(obj)];
}
exports.insertObj = insertObj;
//# sourceMappingURL=db.js.map