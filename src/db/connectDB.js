import { join } from 'node:path'
import { readFileSync } from 'node:fs' 
import db from './index.js'

export const ConnectDB =  async () => {
    try {
        const filePath = join('src/db/init.sql')
        const sql = readFileSync(filePath, 'utf-8');
        await db.query(sql);
        console.log('Table created successfully');
        
    } catch (error) {
        console.log(error.message)
    }
}