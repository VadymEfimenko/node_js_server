import express from 'express';
import sequelize from './config/database';
import studentRoutes from "./routes/studentRoutes";
import courseRouter from "./routes/CourseRoutes";
import studentCourseRoutes from "./routes/StudentCourseRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(studentRoutes);
app.use(courseRouter);
app.use(studentCourseRoutes);


sequelize.sync({ force: true }).then(() => {
  console.log('Connection has been established successfully.');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});
