import db from '../config/db.js';

export const Election = {
    
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM election');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM election WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({ name, start_date, end_date, status }) => {
    const [result] = await db.query(
      'INSERT INTO election (name, start_date, end_date, status) VALUES (?, ?, ?, ?)',
      [name, start_date, end_date, status]
    );
    return {id: result.insertId, name, start_date, end_date, status};
  },

  update: async (id, { name, start_date, end_date, status }) => {
    await db.query(
      'UPDATE election SET name = ?, start_date = ?, end_date = ?, status = ? WHERE id = ?',
      [name, start_date, end_date, status, id]
    );
    return {id, name, start_date, end_date, status};
  },

  delete: async (id) => {
    await db.query('DELETE FROM election WHERE id = ?', [id]);
    return { message: 'Elección eliminada correctamente' };
  },
};