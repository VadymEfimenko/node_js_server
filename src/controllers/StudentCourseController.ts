import {Request, Response} from 'express';
import {Student} from '../models/Student';
import {Course} from '../models/Course';


export const enrollStudentToCourse = async (req: Request, res: Response) => {
    const {studentId, courseId} = req.body; // Предположим, что ID студента и курса передаются в теле запроса

    try {
        // Находим студента и курс по их ID
        const student = await Student.findByPk(studentId);
        const course = await Course.findByPk(courseId);

        if (!student || !course) {
            return res.status(404).send('Student or Course not found');
        }

        // Добавляем студента к курсу
        await course.addStudent(student);

        res.status(201).send('Student enrolled to course successfully');
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const rejectStudentCourse = async (req: Request, res: Response) => {
    const {studentId, courseId} = req.body;

    try {
        // Находим студента и курс по их ID
        const student = await Student.findByPk(studentId);
        const course = await Course.findByPk(courseId);

        if (!student || !course) {
            return res.status(404).send('Student or Course not found');
        }

        if (! await course.hasStudent(student)) {
            // Связь не существует
            return res.status(404).send('No association between the given student and course');
        }

        // Добавляем студента к курсу
        await course.removeStudent(student);

        res.status(201).send('Student rejected from course successfully');
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}
