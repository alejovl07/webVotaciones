import express from 'express';
import {
  getAllElections,
  getElectionById,
  createElection,
  updateElection,
  deleteElection
} from '../controllers/election.controller.js';

const router = express.Router();

router.get('/', getAllElections);
router.get('/:id', getElectionById);
router.post('/', createElection);
router.put('/:id', updateElection);
router.delete('/:id', deleteElection);

export default router;