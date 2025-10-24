import { General_Votes } from '../models/general_votes.model.js';

export const getAllGeneral_Votes = async (req, res) => {
  const general_votes = await General_Votes.getAll();
  res.json(general_votes);
};

export const getGeneral_VotesById = async (req, res) => {
  const general_votes = await General_Votes.getById(req.params.id);
  general_votes ? res.json(general_votes) : res.status(404).json({ message: 'Votos generales no encontrado' });
};

export const createGeneral_Votes = async (req, res) => {
  const general_votes = await General_Votes.create(req.body);
  res.status(201).json(general_votes);
};

export const updateGeneral_votes = async (req, res) => {
  const general_votes = await General_Votes.update(req.params.id, req.body);
  res.json(general_votes);
};

export const deleteGeneral_votes = async (req, res) => {
  const result = await General_Votes.delete(req.params.id);
  res.json(result);
};