import { Vote } from '../models/votes.model.js';

export const getAllVotes = async (req, res) => {
  console.log("Entró a controller - votos");
  const votos = await Vote.getAll();
  console.log(votos, "Controller");
  res.json(votos);
};

export const getVoteById = async (req, res) => {
  const voto = await Vote.getById(req.params.id);
  voto ? res.json(voto) : res.status(404).json({ message: 'Voto no encontrado' });
};

export const createVote = async (req, res) => {
  const voto = await Vote.create(req.body);
  res.status(201).json(voto);
};

export const updateVote = async (req, res) => {
  const voto = await Vote.update(req.params.id, req.body);
  res.json(voto);
};

export const deleteVote = async (req, res) => {
  const result = await Vote.delete(req.params.id);
  res.json(result);
};