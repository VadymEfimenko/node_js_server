import { Router } from 'express';
import { createStudent, getAllStudents } from '../controllers/studentController';

const router = Router();

router.post('/api/students', createStudent);
router.get('/api/students', getAllStudents);

export default router;
