"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
// src/config/database.ts
const core_1 = require("@sequelize/core");
const Course_1 = require("../models/Course");
const Student_1 = require("../models/Student");
exports.sequelize = new core_1.Sequelize('node_js_student_course', 'root', '123123123', {
    host: 'localhost',
    dialect: 'mysql',
    models: [Course_1.Course, Student_1.Student],
});
exports.default = exports.sequelize;
//# sourceMappingURL=database.js.map