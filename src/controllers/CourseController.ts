import {Request, Response} from 'express';
import {Course} from '../models/Course';
import sequelize from "../config/database";
import {QueryTypes} from "@sequelize/core";

export const createCourse = async (req: Request, res: Response) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};

export const getAllCourses = async (req: Request, res: Response) => {

    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const findCourseById = async (req: Request, res: Response) => {
    const {courseId} = req.params;
    try {
        const course = await Course.findByPk(courseId);
        res.status(200).json(course);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}
export const getAllStudentsByCourseId = async (req: Request, res: Response) => {
    const {courseId} = req.params;
    try {
        const course = await Course.findByPk(courseId);
        if (course) {
            const students = await course.getStudents();
            res.status(200).json(students);
        } else {
            res.status(404).send('Course not found');
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const getStudentsNotInCourse = async (req: Request, res: Response) => {
    const {courseId} = req.params;

    try {
        const [results] = await sequelize.query(
            `SELECT *
             FROM Students
             WHERE id NOT IN (SELECT StudentId FROM CourseStudent WHERE CourseId = ?)`,
            {
                replacements: [courseId],
            }
        );
        console.log(results)
        res.status(200).json(results);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};