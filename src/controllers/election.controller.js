import { Election } from '../models/election.model.js';

export const getAllElections = async (req, res) => {
  const election = await Election.getAll();
  res.json(election);
};

export const getElectionById = async (req, res) => {
  const election = await Election.getById(req.params.id);
  election ? res.json(election) : res.status(404).json({ message: 'Elección no encontrada' });
};

export const createElection = async (req, res) => {
  const newElection = await Election.create(req.body);
  res.status(201).json(newElection);
};

export const updateElection = async (req, res) => {
  const updatedElection = await Election.update(req.params.id, req.body);
  res.json(updatedElection);
};

export const deleteElection = async (req, res) => {
  const result = await Election.delete(req.params.id);
  res.json(result);
};