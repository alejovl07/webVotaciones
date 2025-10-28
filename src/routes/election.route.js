import express from 'express';
import pool from '../config/db.js';
import { ElectionRepository } from '../repositories/election.repository.js';
import { ElectionService } from '../services/election.service.js';
import { ElectionController } from '../controllers/election.controller.js';

const router = express.Router();

const electionRepository = new ElectionRepository(pool);
const electionService = new ElectionService(electionRepository);
const electionController = new ElectionController(electionService);

router.get('/', electionController.getAllElections);
router.get('/:id', electionController.getElectionById);
router.post('/', electionController.createElection);
router.put('/:id', electionController.updateElection);
router.delete('/:id', electionController.deleteElection);

export default router;