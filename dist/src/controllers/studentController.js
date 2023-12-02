"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStudents = exports.createStudent = void 0;
const Student_1 = require("../models/Student");
const createStudent = async (req, res) => {
    try {
        const student = await Student_1.Student.create(req.body);
        res.status(201).json(student);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
exports.createStudent = createStudent;
const getAllStudents = async (req, res) => {
    try {
        const students = await Student_1.Student.findAll();
        res.status(200).json(students);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
exports.getAllStudents = getAllStudents;
//# sourceMappingURL=studentController.js.map