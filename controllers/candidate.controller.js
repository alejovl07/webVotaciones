import { Candidate } from '../models/candidate.model.js';

export const getAllCandidates = async (req, res) => {
  console.log("Entró al controlador de candidatos");
  const candidatos = await Candidate.getAll();
  console.log(candidatos, "Controller");
  res.json(candidatos);
};

export const getCandidateById = async (req, res) => {
  const candidato = await Candidate.getById(req.params.id);
  candidato ? res.json(candidato) : res.status(404).json({ message: 'Candidato no encontrado' });
};

export const createCandidate = async (req, res) => {
  const nuevoCandidato = await Candidate.create(req.body);
  res.status(201).json(nuevoCandidato);
};

export const updateCandidate = async (req, res) => {
  const candidatoActualizado = await Candidate.update(req.params.id, req.body);
  res.json(candidatoActualizado);
};

export const deleteCandidate = async (req, res) => {
  const resultado = await Candidate.delete(req.params.id);
  res.json(resultado);
};