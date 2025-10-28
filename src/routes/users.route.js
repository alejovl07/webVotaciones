import express from 'express';

import pool from '../config/db.js';
import {UsersRepository} from '../repositories/users.repository.js'
import {UsersService} from "../services/users.service.js";
import {UsersController} from "../controllers/users.controller.js";



const router = express.Router();

const usersRepository = new UsersRepository(pool);
const usersService = new UsersService(usersRepository)
const usersController = new UsersController(usersService)



router.get('/', usersController.getAllUsers);
router.get('/search/:email', usersController.getUserByEmail);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

export default router;