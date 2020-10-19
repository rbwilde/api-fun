import express from 'express';

import { createUser, findUser, deleteUser, updateUser, getUser } from '../controllers/users.js';


const router = express.Router();


router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', findUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;