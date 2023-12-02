import { Model, InferAttributes, InferCreationAttributes } from '@sequelize/core';
import { Student } from './Student';
export declare class Course extends Model<InferAttributes<Course>, InferCreationAttributes<Course>> {
    name: string;
    students: Student[];
}
