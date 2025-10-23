import db from '../config/db.js';

export const Vote = {
  getAll: async () => {
    console.log("Entró a model - votos");
    const [rows] = await db.query('SELECT * FROM votos');
    console.log(rows, "Model");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM votos WHERE id_voto = ?', [id]);
    return rows[0];
  },

  create: async ({ id_votante, id_eleccion, id_candidato }) => {
    const [result] = await db.query(
      'INSERT INTO votos (id_votante, id_eleccion, id_candidato) VALUES (?, ?, ?)',
      [id_votante, id_eleccion, id_candidato]
    );
    return { 
      id_voto: result.insertId, 
      id_votante, 
      id_eleccion, 
      id_candidato 
    };
  },

  update: async (id, { id_votante, id_eleccion, id_candidato }) => {
    await db.query(
      'UPDATE votos SET id_votante = ?, id_eleccion = ?, id_candidato = ? WHERE id_voto = ?',
      [id_votante, id_eleccion, id_candidato, id]
    );
    return { id_voto: id, id_votante, id_eleccion, id_candidato };
  },

  delete: async (id) => {
    await db.query('DELETE FROM votos WHERE id_voto = ?', [id]);
    return { message: 'Voto eliminado correctamente' };
  },
};  