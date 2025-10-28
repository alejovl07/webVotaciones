import express from 'express';

import pool from '../config/db.js';
import {ElectionCandidatesRepository} from '../repositories/election_candidates.repository.js'
import {UsersRepository} from '../repositories/users.repository.js'
import {ElectionCandidatesService} from "../services/election_candidates.service.js";
import {ElectionCandidatesController} from "../controllers/election_candidates.controller.js";



const router = express.Router();
const usersRepository = new UsersRepository(pool);
const electionCandidatesRepository = new ElectionCandidatesRepository(pool);
const electionCandidatesService = new ElectionCandidatesService(electionCandidatesRepository,usersRepository)
const electionCandidatesController = new ElectionCandidatesController(electionCandidatesService)



router.post('/', electionCandidatesController.addCandidate);
router.get('/:election_id', electionCandidatesController.getCandidatesByElection);


export default router;