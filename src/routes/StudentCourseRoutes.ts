import { Router } from 'express';
import {enrollStudentToCourse, rejectStudentCourse} from '../controllers/StudentCourseController';

const router = Router();

router.post('/api/enroll', enrollStudentToCourse);
router.post('/api/reject', rejectStudentCourse);
export default router;
