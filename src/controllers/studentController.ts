import { Request, Response } from 'express';
import { Student } from '../models/Student';

export const createStudent = async (req: Request, res: Response) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};

export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};
