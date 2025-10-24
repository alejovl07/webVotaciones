import express from 'express';
import {
  getAllElections_Status_History,
  getElection_Status_HistoryById,
  createElection_Status_History,
  updateElection_Status_History,
  deleteElection_Status_History
} from '../controllers/election_status_history.controller.js';

const router = express.Router();

router.get('/', getAllElections_Status_History);
router.get('/:id', getElection_Status_HistoryById);
router.post('/', createElection_Status_History);
router.put('/:id', updateElection_Status_History);
router.delete('/:id', deleteElection_Status_History);

export default router;  