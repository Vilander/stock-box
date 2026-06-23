 import { type SQLiteDatabase } from "expo-sqlite"
 
 export async function migrate(database: SQLiteDatabase){
    await database.execAsync(`
            PRAGMA foreign_keys = ON;
            
            CREATE TABLE IF NOT EXISTS produtos(
                id INTEGER PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                quantity INTEGER NOT NULL,
                price REAL NOT NULL,
                image TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
                
            );
            
        `) 
 } 