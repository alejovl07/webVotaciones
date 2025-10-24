import db from '../config/db.js';

export const Role = {

  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM role');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM role WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({name}) => {
    const [result] = await db.query(
      'INSERT INTO role (name) VALUES (?, ?, ?, ?)',
      [name]
    );
    return { id: result.insertId, email, id_card, role_id };
  },

  update: async (id, { name }) => {
    await db.query(
      'UPDATE role SET name = ? WHERE id = ?',
      [name, id]
    );
    return { id, name };
  },

  delete: async (id) => {
    await db.query('DELETE FROM role WHERE id = ?', [id]);
    return { message: 'Rol eliminado correctamente' };
  },
};