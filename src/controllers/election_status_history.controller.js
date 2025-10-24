import { Election_Status_History } from '../models/election_status_history.model.js';

export const getAllElections_Status_History = async (req, res) => {
  const election_status_history = await Election_Status_History.getAll();
  res.json(election_status_history);
};

export const getElection_Status_HistoryById = async (req, res) => {
  const election_status_history = await Election_Status_History.getById(req.params.id);
  election_status_history ? res.json(election_status_history) : res.status(404).json({ message: 'Elección no encontrada' });
};

export const createElection_Status_History = async (req, res) => {
  const newElection_Status_History = await Election_Status_History.create(req.body);
  res.status(201).json(newElection_Status_History);
};

export const updateElection_Status_History = async (req, res) => {
  const updatedElection_Status_History = await Election_Status_History.update(req.params.id, req.body);
  res.json(updatedElection_Status_History);
};

export const deleteElection_Status_History = async (req, res) => {
  const result = await Election_Status_History.delete(req.params.id);
  res.json(result);
};