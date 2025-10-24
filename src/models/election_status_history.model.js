import db from '../config/db.js';

export const Election_Status_History = {
    
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM election_status_history');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM election_status_history WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({election_id, status_name}) => {
    const [result] = await db.query(
      'INSERT INTO election_status_history (election_id, status_name) VALUES (?, ?)',
      [election_id, status_name]
    );
    return {id: result.insertId, election_id, status_name};
  },

  update: async (id, { election_id, status_name}) => {
    await db.query(
      'UPDATE election_status_history SET election_id = ?, status_name = ? WHERE id = ?',
      [election_id, status_name, id]
    );
    return {id, election_id, status_name};
  },

  delete: async (id) => {
    await db.query('DELETE FROM election_status_history WHERE id = ?', [id]);
    return { message: 'Elección eliminada correctamente' };
  },
};