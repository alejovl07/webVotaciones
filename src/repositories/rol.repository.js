import {Role} from "../models/role.model.js";

export class RoleRepository {
    constructor(database) {
        this.database = database;
    }

    async getRoleById(id) {
        try {
            const [rows] = await this.database.query('SELECT * FROM role WHERE id = ?', [id]);
            if (rows.length === 0) return null;
            return new Role(rows[0]);
        } catch (e) {
            throw new Error(`Error fetching role by id: ${e.message}`);
        }
    }

    async getAllRoles() {
        try {
            const [rows] = await this.database.query('SELECT * FROM role');
            return rows.map(row => new Role(row));
        } catch (e) {
            throw new Error(`Error fetching all roles: ${e.message}`);
        }
    }

    async createRole({name}) {
        try {
            const [result] = await this.database.query('INSERT INTO role (name) VALUES (?)', [name]);
            return new Role({id: result.insertId, name});
        } catch (e) {
            throw new Error(`Rol could not be created: ${e.message}`);
        }

    }

    async deleteRole(id) {
        try {
            const [result] = await this.database.query('DELETE FROM role WHERE id = ?', [id]);
            if (result.affectedRows === 0) {
                return {message: 'Role not found'};
            }
            return {message: 'Role deleted successfully'};
        } catch (e) {
            throw new Error(`Error deleting role: ${e.message}`);
        }

    }

    async updateRoleById(id, {name}) {
        try {
            const [result] = await this.database.query('UPDATE role SET name = ? WHERE id = ?', [name, id]);
            if (result.affectedRows === 0) throw new Error('Role no found')
            return new Role({id, name});
        } catch (e) {
            throw new Error(`Error updating role: ${e.message}`);
        }
    }


}
