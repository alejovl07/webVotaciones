import express from 'express';
import {
  getAllGeneral_Votes,
  getGeneral_VotesById,
  createGeneral_Votes,
  updateGeneral_votes,
  deleteGeneral_votes
} from '../controllers/general_votes.controller.js';

const router = express.Router();

router.get('/', getAllGeneral_Votes);
router.get('/:id', getGeneral_VotesById);
router.post('/', createGeneral_Votes);
router.put('/:id', updateGeneral_votes);
router.delete('/:id', deleteGeneral_votes);

export default router;