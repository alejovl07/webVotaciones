import express from 'express';
import {
  getAllVotes,
  getVoteById,
  createVote,
  updateVote,
  deleteVote
} from '../controllers/vote.controller.js';

const router = express.Router();

router.get('/', getAllVotes);
router.get('/:id', getVoteById);
router.post('/', createVote);
router.put('/:id', updateVote);
router.delete('/:id', deleteVote);

export default router;