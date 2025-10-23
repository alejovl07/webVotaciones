  import db from '../config/db.js';

export const Usuario = {

  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id]);
    return rows[0];
  },

  create: async ({ nombre, apellido, correo, contrasena, rol, estado }) => { 
    const [result] = await db.query( 
    'INSERT INTO usuarios (nombre, apellido, correo, contrasena, rol, estado) VALUES (?, ?, ?, ?, ?, ?)', 
    [nombre, apellido, correo, contrasena, rol, estado] 
  ); 
    return { id: result.insertId, nombre, apellido, correo, rol, estado }; },

  update: async (id, { nombre, apellido, correo, contrasena, rol, estado }) => {
    await db.query(
      'UPDATE usuarios SET nombre = ?, apellido = ?, correo = ?, contrasena = ?, rol = ?, estado = ? WHERE id_usuario = ?',
      [nombre, apellido, correo, contrasena, rol, estado, id]
    );
    return { id, nombre, apellido, correo, rol, estado };
  },

  delete: async (id) => {
    await db.query('DELETE FROM usuarios WHERE id_usuario = ?', [id]);
    return { message: 'Usuario eliminado' };
  },
};