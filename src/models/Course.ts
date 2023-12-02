import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    NonAttribute,
    BelongsToManyAddAssociationMixin,
    BelongsToManyCountAssociationsMixin,
    BelongsToManyRemoveAssociationMixin,
    BelongsToManyHasAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyGetAssociationsMixinOptions
} from '@sequelize/core';
import {Student} from './Student';
import {Attribute, BelongsToMany} from "@sequelize/core/decorators-legacy";

export class Course extends Model<InferAttributes<Course>, InferCreationAttributes<Course>> {
    @Attribute({
        type: DataTypes.STRING,
        allowNull: false
    })
    name!: string;

    // Связь "многие ко многим" с моделью Student через автоматически созданную таблицу
    @BelongsToMany(() => Student, {
        through: 'CourseStudent',
        inverse: {
            as: 'courses',
        },
    })
    declare students?: NonAttribute<Student[]>;


    declare addStudent: BelongsToManyAddAssociationMixin<Student, number>;

    declare removeStudent: BelongsToManyRemoveAssociationMixin<Student, number>;

    declare hasStudent : BelongsToManyHasAssociationMixin<Student, number>;

    declare getStudents : BelongsToManyGetAssociationsMixin<Student>;


}