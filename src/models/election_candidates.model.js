import db from '../config/db.js';

export const Election_Candidates = {
    
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM election_candidates');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM election_candidates WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({election_id, user_id}) => {
    const [result] = await db.query(
      'INSERT INTO election_candidates (election_id, user_id) VALUES (?, ?)',
      [election_id, user_id]
    );
    return {id: result.insertId, election_id, user_id};
  },

  update: async (id, { election_id, user_id}) => {
    await db.query(
      'UPDATE election_candidates SET election_id = ?, user_id = ? WHERE id = ?',
      [election_id, user_id, id]
    );
    return {id, election_id, user_id};
  },

  delete: async (id) => {
    await db.query('DELETE FROM election_candidates WHERE id = ?', [id]);
    return { message: 'Elección eliminada correctamente' };
  },
};