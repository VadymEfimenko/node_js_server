// src/config/database.ts
import { Sequelize } from '@sequelize/core';
import {Course} from "../models/Course";
import {Student} from "../models/Student";

export const sequelize = new Sequelize('node_js_student_course', 'root', '123123123', {
  host: 'localhost',
  dialect: 'mysql',
  models : [Course, Student],
  logging: false
});

export default sequelize;
