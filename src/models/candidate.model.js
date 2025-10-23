
import db from '../config/db.js';

export const Candidate = {

  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM candidatos');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM candidatos WHERE id_candidato = ?', [id]);
    return rows[0];
  },

  create: async ({ nombre, apellido, descripcion, id_eleccion }) => {
    const [result] = await db.query(
      'INSERT INTO candidatos (nombre, apellido, descripcion, id_eleccion) VALUES (?, ?, ?, ?)',
      [nombre, apellido, descripcion, id_eleccion]
    );
    return {  id_candidato: result.insertId, nombre, apellido, descripcion, id_eleccion };
  },

  update: async (id, { nombre, apellido, descripcion, id_eleccion }) => {
    await db.query(
      'UPDATE candidatos SET nombre = ?, apellido = ?, descripcion = ?, id_eleccion = ? WHERE id_candidato = ?',
      [nombre, apellido, descripcion, id_eleccion, id]
    );
    return { id_candidato: id, nombre, apellido, descripcion, id_eleccion };
  },

  delete: async (id) => {
    await db.query('DELETE FROM candidatos WHERE id_candidato = ?', [id]);
    return { message: 'Candidato eliminado correctamente' };
  },
};