import { Role } from '../models/role.model.js';

export const getAllRole = async (req, res) => {
  const role = await Role.getAll();
  res.json(role);
};

export const getRoleById = async (req, res) => {
  const role = await Role.getById(req.params.id);
  role ? res.json(role) : res.status(404).json({ message: 'Voto no encontrado' });
};

export const createRole = async (req, res) => {
  const role = await Role.create(req.body);
  res.status(201).json(role);
};

export const updateRole = async (req, res) => {
  const role = await Role.update(req.params.id, req.body);
  res.json(role);
};

export const deleteRole = async (req, res) => {
  const result = await Role.delete(req.params.id);
  res.json(result);
};     