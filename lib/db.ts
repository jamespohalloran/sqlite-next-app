import sqlite from "sqlite3";

const relPath = process.env.NODE_ENV == 'development' ? `${process.cwd()}/public` : process.cwd()
const db = new sqlite.Database(`${relPath}/public/sqlite.db`);

export default db;