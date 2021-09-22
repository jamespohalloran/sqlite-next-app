import sqlite from "sqlite3";

const relPath = process.env.NODE_ENV == 'development' ? `${process.cwd()}/public` : process.cwd()
const db = new sqlite.Database(`${relPath}/sqlite.db`);

export default db;