import { Election_Status } from '../models/election_status.model.js';

export const getAllElections_Status = async (req, res) => {
  const election_status = await Election_Status.getAll();
  res.json(election_status);
};

export const getElection_StatusById = async (req, res) => {
  const election_status = await Election_Status.getById(req.params.id);
  election_status ? res.json(election_status) : res.status(404).json({ message: 'Elección no encontrada' });
};

export const createElection_Status = async (req, res) => {
  const newElection_Status = await Election_Status.create(req.body);
  res.status(201).json(newElection_Status);
};

export const updateElection_Status = async (req, res) => {
  const updatedElection_Status = await Election_Status.update(req.params.id, req.body);
  res.json(updatedElection_Status);
};

export const deleteElection_Status = async (req, res) => {
  const result = await Election_Status.delete(req.params.id);
  res.json(result);
};