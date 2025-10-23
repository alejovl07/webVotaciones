import { Elections } from '../models/elections.model.js';

export const getAllElections = async (req, res) => {
  console.log("Entró al controlador de elecciones");
  const elecciones = await Elections.getAll();
  console.log(elecciones, "Controller");
  res.json(elecciones);
};

export const getElectionById = async (req, res) => {
  const eleccion = await Elections.getById(req.params.id);
  eleccion ? res.json(eleccion) : res.status(404).json({ message: 'Elección no encontrada' });
};

export const createElection = async (req, res) => {
  const nuevaEleccion = await Elections.create(req.body);
  res.status(201).json(nuevaEleccion);
};

export const updateElection = async (req, res) => {
  const eleccionActualizada = await Elections.update(req.params.id, req.body);
  res.json(eleccionActualizada);
};

export const deleteElection = async (req, res) => {
  const resultado = await Elections.delete(req.params.id);
  res.json(resultado);
};