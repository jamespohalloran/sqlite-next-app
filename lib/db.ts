import sqlite from "sqlite3";

const db = new sqlite.Database(`${process.cwd()}/sqlite.db`);

export default db;