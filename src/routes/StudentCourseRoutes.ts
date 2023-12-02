import { Router } from 'express';
import {enrollStudentToCourse, rejectStudentCourse} from '../controllers/StudentCourseController';

const router = Router();

// Маршрут для записи студента на курс
router.post('/api/enroll', enrollStudentToCourse);
router.post('/api/reject', rejectStudentCourse);
export default router;
