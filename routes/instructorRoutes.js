import express from "express";
import {
  getCourses,
  createCourse,
  deleteCourse,
  updateCourse,
} from "../controllers/courseControllers.js";
import upload from "../middlewares/upload-middleware.js";
import {
  getAllInstructors,
  singin,
  singup,
} from "../controllers/instructorController.js";

const instructorRouter = express.Router();

instructorRouter.post("/signup", singup);
instructorRouter.post("/signin", singin);

instructorRouter.get("/get-courses", getCourses);
instructorRouter.get("/get-instructors", getAllInstructors);

instructorRouter.post("/add-courses", upload.single("image"), createCourse);

instructorRouter.put("/update-courses/:id", updateCourse);

instructorRouter.delete("/delete-instructors/:id", deleteCourse);

export default instructorRouter;
