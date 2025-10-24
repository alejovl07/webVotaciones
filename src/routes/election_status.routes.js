import express from 'express';
import {
  getAllElections_Status,
  getElection_StatusById,
  createElection_Status,
  updateElection_Status,
  deleteElection_Status
} from '../controllers/election_status.controller.js';

const router = express.Router();

router.get('/', getAllElections_Status);
router.get('/:id', getElection_StatusById);
router.post('/', createElection_Status);
router.put('/:id', updateElection_Status);
router.delete('/:id', deleteElection_Status);

export default router;