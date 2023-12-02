"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/studentRoutes.ts
const express_1 = require("express");
const studentController_1 = require("../controllers/studentController");
const router = (0, express_1.Router)();
router.post('/students', studentController_1.createStudent);
router.get('/students', studentController_1.getAllStudents);
exports.default = router;
//# sourceMappingURL=studentRoutes.js.map