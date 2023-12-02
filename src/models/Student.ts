import {Model, DataTypes, InferAttributes, InferCreationAttributes, NonAttribute} from '@sequelize/core';
import { Course } from './Course';
import {Attribute} from "@sequelize/core/decorators-legacy";


export class Student extends Model<InferAttributes<Student>, InferCreationAttributes<Student>> {
  @Attribute({
    type: DataTypes.STRING,
    allowNull: false
  })
  fullName!: string;

  declare courses?: NonAttribute<Course[]>;
}