import db from '../config/db.js';

export const User = {

  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({ email, password, id_card, role_id }) => {
    const [result] = await db.query(
      'INSERT INTO users (email, password, id_card, role_id) VALUES (?, ?, ?, ?)',
      [email, password, id_card, role_id]
    );
    return { id: result.insertId, email, id_card, role_id };
  },

  update: async (id, { email, password, id_card, role_id }) => {
    await db.query(
      'UPDATE users SET email = ?, password = ?, id_card = ?, role_id = ? WHERE id = ?',
      [email, password, id_card, role_id, id]
    );
    return { id, email, id_card, role_id };
  },

  delete: async (id) => {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
    return { message: 'Usuario eliminado correctamente' };
  },
};