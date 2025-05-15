import db from '../db/index.js'

export class UserController {
    async createUser(req, res) {
        try {
            const { username , password } = req.body;
            const result = await db.query(
                'insert into users (username, password) values($1, $2) returning *',
                [username, password]
            );
            return res.status(201).json({
                statusCode: 201,
                message: 'success',
                data: result?.rows[0]
            });
        } catch (error) {
            return res.status(500).json({
                error: error.message
            })
        }
    }
    async signIn(req, res) {
        try {
            
        } catch (error) {
            return res.status(500).json({
                error: error.message
            })
        }
    }
}