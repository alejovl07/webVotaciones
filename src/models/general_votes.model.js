import db from '../config/db.js';

export const General_Votes = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM general_votes');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM general_votes WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({election_id, candidate_id, total_votes}) => {
    const [result] = await db.query(
      'INSERT INTO general_votes (election_id, candidate_id, total_votes) VALUES (?, ?, ?, ?)',
      [election_id, candidate_id, total_votes]
    );
    return { 
      id: result.insertId, election_id, candidate_id, total_votes};
  },

  update: async (id, {election_id, candidate_id, total_votes}) => {
    await db.query(
      'UPDATE general_votes SET election_id = ?, candidate_id = ?, total_votes = ? WHERE id = ?',
      [election_id, candidate_id, total_votes, id]
    );
    return { id, election_id, candidate_id, total_votes};
  },

  delete: async (id) => {
    await db.query('DELETE FROM general_votes WHERE id = ?', [id]);
    return { message: 'Registro eliminado correctamente' };
  },
};