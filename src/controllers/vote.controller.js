import { Vote } from '../models/vote.model.js';

export const getAllVotes = async (req, res) => {
  const votes = await Vote.getAll();
  res.json(votes);
};

export const getVoteById = async (req, res) => {
  const vote = await Vote.getById(req.params.id);
  vote ? res.json(vote) : res.status(404).json({ message: 'Voto no encontrado' });
};

export const createVote = async (req, res) => {
  const vote = await Vote.create(req.body);
  res.status(201).json(vote);
};

export const updateVote = async (req, res) => {
  const vote = await Vote.update(req.params.id, req.body);
  res.json(vote);
};

export const deleteVote = async (req, res) => {
  const result = await Vote.delete(req.params.id);
  res.json(result);
};