import { Election_Candidates } from '../models/election_candidates.model.js';

export const getAllElections_Candidates = async (req, res) => {
  const election_candidates = await Election_Candidates.getAll();
  res.json(election_candidates);
};

export const getElection_CandidatesById = async (req, res) => {
  const election_candidates = await Election_Candidates.getById(req.params.id);
  election_candidates ? res.json(election_candidates) : res.status(404).json({ message: 'Elección no encontrada' });
};

export const createElection_Candidate = async (req, res) => {
  const newElection_candidates = await Election_Candidates.create(req.body);
  res.status(201).json(newElection_candidates);
};

export const updateElection_Candidates = async (req, res) => {
  const updatedElection_candidates = await Election_Candidates.update(req.params.id, req.body);
  res.json(updatedElection_candidates);
};

export const deleteElection_Candidates = async (req, res) => {
  const result = await Election_Candidates.delete(req.params.id);
  res.json(result);
};