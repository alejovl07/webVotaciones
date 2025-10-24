import db from '../config/db.js';

export const Vote = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM vote');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM vote WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({ voter_id, election_id, candidate_id, date }) => {
    const [result] = await db.query(
      'INSERT INTO vote (voter_id, election_id, candidate_id, date) VALUES (?, ?, ?, ?)',
      [voter_id, election_id, candidate_id, date]
    );
    return { id: result.insertId, voter_id, election_id, candidate_id, date};
  },

  update: async (id, { voter_id, election_id, candidate_id, date }) => {
    await db.query(
      'UPDATE vote SET voter_id = ?, election_id = ?, candidate_id = ?, date = ? WHERE id = ?',
      [voter_id, election_id, candidate_id, date, id]
    );
    return { id, voter_id, election_id, candidate_id, date };
  },

  delete: async (id) => {
    await db.query('DELETE FROM vote WHERE id = ?', [id]);
    return { message: 'Voto eliminado correctamente' };
  },
};