import express from 'express';

import pool from '../config/db.js';
import {VoteRepository} from '../repositories/vote.repository.js'
import {VoteService} from "../services/vote.service.js";
import {VoteController} from "../controllers/vote.controller.js";


const voteRepository = new VoteRepository(pool);
const voteService = new VoteService(voteRepository);
const voteController = new VoteController(voteService);

const router = express.Router();

router.get('/', voteController.getVoteByVoter);
router.get('/all', voteController.getAllVotes);
router.post('/', voteController.createVote);
router.delete('/', voteController.deleteVote);

export default router;