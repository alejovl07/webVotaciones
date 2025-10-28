import express from 'express';

import pool from '../config/db.js';
import {RoleRepository} from '../repositories/rol.repository.js'
import {RoleService} from "../services/role.service.js";
import {RoleController} from "../controllers/role.controller.js";

const router = express.Router();

const roleRepository = new RoleRepository(pool);
const roleService = new RoleService(roleRepository)
const roleController = new RoleController(roleService)

router.post('/', roleController.createRole);
router.get('/:id', roleController.getRoleById);
router.get('/', roleController.getAllRoles);
router.delete('/:id', roleController.deleteRole);

export default router;