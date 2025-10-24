import express from 'express';
import {
  getAllElections_Candidates,
  getElection_CandidatesById,
  createElection_Candidate,
  updateElection_Candidates,
  deleteElection_Candidates
} from '../controllers/election_candidates.controller.js';

const router = express.Router();

router.get('/', getAllElections_Candidates);
router.get('/:id', getElection_CandidatesById);
router.post('/', createElection_Candidate);
router.put('/:id', updateElection_Candidates);
router.delete('/:id', deleteElection_Candidates);

export default router;