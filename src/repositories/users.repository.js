import {User} from "../models/users.model.js";

export class UsersRepository {
    constructor(database) {
        this.database = database;
    }

    async getAllUsers() {
        try {
            const [rows] = await this.database.query('SELECT * FROM users');
            return rows.map(row => new User(row));
        } catch (e) {
            throw new Error(`Error fetching all users: ${e.message}`);
        }
    }

    async getUserById(id) {
        try {
            const [rows] = await this.database.query('SELECT * FROM users WHERE id = ?', [id]);
            if (rows.length === 0) return null;
            return new User(rows[0]);
        } catch (e) {
            throw new Error(`Error fetching user by id: ${e.message}`);
        }

    }
    async getUserByEmail(email) {
        const [rows] = await this.database.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length === 0) return null;
        return new User(rows[0]);
    }

    async createUser({email, password, id_card, role_id}) {
        try {
            const [newUser] = await this.database.query('INSERT INTO users (email, password, id_card, role_id) VALUES (?, ?, ?, ?)', [email, password, id_card, role_id]);
            return new User({id: newUser.insertId, email, id_card, role_id}); // no retorna la password.
        } catch (e) {
            throw new Error(`User could not be created: ${e.message}`);
        }
    }

    async deleteUser(id) {
        try {
            const [deleteUser] = await this.database.query('DELETE FROM users WHERE id = ?', [id]);
            if (deleteUser.affectedRows === 0) {
                return {message: 'User not found'}
            }
            return {message: 'User deleted successfully'}
        } catch (e) {
            throw new Error(`Error deleting user by id: ${e.message}`);
        }
    }

    async updateUser({id, email, password, id_card, role_id}) {
        try {
            const [updateUser] = await this.database.query('UPDATE users SET email = ?, password = ?, id_card = ?, role_id = ? WHERE id = ?', [email, password, id_card, role_id, id])
            if (updateUser.affectedRows === 0) throw new Error('User not found')
            return new User({email, password, id_card, role_id});
        } catch (e) {
            throw new Error(`Error updating user by id: ${e.message}`);
        }
    }

    async isCandidate(id){
        try {
            const rolName = 2 // ponerlo en el env
            const [rows] = await this.database.query('SELECT * FROM users WHERE role_id = ? AND id = ?', [rolName, id])
            return rows.length > 0;
        }catch (e){
            throw new Error(`Error validating user as candidate: ${e.message}`)
        }
    }


}

