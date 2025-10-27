import express from 'express';

import pool from '../config/db.js';
import {GeneralVotesRepository} from '../repositories/general_votes.repository.js'
import {GeneralVotesService} from "../services/general_votes.service.js";
import {GeneralVotesController} from "../controllers/general_votes.controller.js";


const generalVotesRepository = new GeneralVotesRepository(pool);
const generalVotesService = new GeneralVotesService(generalVotesRepository);
const generalVotesController = new GeneralVotesController(generalVotesService);

const router = express.Router();


router.get('/:id', generalVotesController.getVotesByElection);
router.get('/', generalVotesController.getVotesByCandidate);


export default router;