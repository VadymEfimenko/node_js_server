"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(studentRoutes_1.default);
database_1.default.sync({ force: true }).then(() => {
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
});
//# sourceMappingURL=app.js.map