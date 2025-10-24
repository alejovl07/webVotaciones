import { User } from '../models/users.model.js';

export const getAllUsers = async (req, res) => {
  const users = await User.getAll();
  res.json(users);
};

export const getUserById = async (req, res) => {
    const users = await User.getById(req.params.id);
    users ? res.json(users) : res.status(404).json({ message: 'User no encontrado' });
};

export const createUser = async (req, res) => {
    const users = await User.create(req.body);
    res.status(201).json(users);
};

export const updateUser = async (req, res) => {
    const users = await User.update(req.params.id, req.body);
    res.json(users);
};

export const deleteUser = async (req, res) => {
    const result = await User.delete(req.params.id);
    res.json(result);
};