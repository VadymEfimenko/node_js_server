import {Model, DataTypes, InferAttributes, InferCreationAttributes, NonAttribute} from '@sequelize/core';
import { Course } from './Course';
import {Attribute} from "@sequelize/core/decorators-legacy";


export class Student extends Model<InferAttributes<Student>, InferCreationAttributes<Student>> {
  @Attribute({
    type: DataTypes.STRING,
    allowNull: false
  })
  fullName!: string;

  // Связь "многие ко многим" с моделью Course через автоматически созданную таблицу
  declare courses?: NonAttribute<Course[]>;
}