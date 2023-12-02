import { Model, InferAttributes, InferCreationAttributes } from '@sequelize/core';
import { Course } from './Course';
export declare class Student extends Model<InferAttributes<Student>, InferCreationAttributes<Student>> {
    fullName: string;
    courses: Course[];
}
