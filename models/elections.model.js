import db from '../config/db.js';

export const Elections = {
    
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM elecciones');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM elecciones WHERE id_eleccion = ?', [id]);
    return rows[0];
  },

  create: async ({ titulo, descripcion, fecha_inicio, fecha_fin, estado }) => {
    const [result] = await db.query(
      'INSERT INTO elecciones (titulo, descripcion, fecha_inicio, fecha_fin, estado) VALUES (?, ?, ?, ?, ?)',
      [titulo, descripcion, fecha_inicio, fecha_fin, estado]
    );
    return {
      id_eleccion: result.insertId,
      titulo,
      descripcion,
      fecha_inicio,
      fecha_fin,
      estado
    };
  },

  update: async (id, { titulo, descripcion, fecha_inicio, fecha_fin, estado }) => {
    await db.query(
      'UPDATE elecciones SET titulo = ?, descripcion = ?, fecha_inicio = ?, fecha_fin = ?, estado = ? WHERE id_eleccion = ?',
      [titulo, descripcion, fecha_inicio, fecha_fin, estado, id]
    );
    return {
      id_eleccion: id,
      titulo,
      descripcion,
      fecha_inicio,
      fecha_fin,
      estado
    };
  },

  delete: async (id) => {
    await db.query('DELETE FROM elecciones WHERE id_eleccion = ?', [id]);
    return { message: 'Elección eliminada correctamente' };
  },
};