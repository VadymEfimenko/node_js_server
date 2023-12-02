import { Router } from 'express';
import {
    createCourse,
    findCourseById,
    getAllCourses,
    getAllStudentsByCourseId,
    getStudentsNotInCourse
} from '../controllers/CourseController';

const router = Router();

router.post('/api/courses', createCourse);

router.get('/api/courses', getAllCourses);

router.get('/api/courses/:courseId', findCourseById);

router.get('/api/courses/:courseId/students', getAllStudentsByCourseId);

router.get('/api/courses/:courseId/studentsNotInCourse', getStudentsNotInCourse);

export default router;
