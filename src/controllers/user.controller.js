import { Usuario } from '../models/user.model.js';

export const getAllUsers = async (req, res) => {
    console.log("Entro controller");
  const usuarios = await Usuario.getAll();
  console.log(usuarios,"Controller")
  res.json(usuarios);
};

export const getUserById = async (req, res) => {
    const usuario = await Usuario.getById(req.params.id);
    usuario ? res.json(usuario) : res.status(404).json({ message: 'Usuario no encontrado' });
};

export const createUser = async (req, res) => {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
};

export const updateUser = async (req, res) => {
    const usuario = await Usuario.update(req.params.id, req.body);
    res.json(usuario);
};

export const deleteUser = async (req, res) => {
    const result = await Usuario.delete(req.params.id);
    res.json(result);
};