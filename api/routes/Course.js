// Import the required modules
const express = require("express");
const router = express.Router();

// Import the Controllers

// Course Controllers Import
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Course");

// Categories Controllers Import
const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category");

// Sections Controllers Import
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section");

// Sub-Sections Controllers Import
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection");

// Rating Controllers Import
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/RatingAndReview");

const { updateCourseProgress } = require("../controllers/courseProgress");

// Importing Middlewares
const {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} = require("../middlewares/auth");

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createCourse", auth,  createCourse);
// router.post("/createCourse",  createCourse);
//Add a Section to a Course
router.post("/addSection", auth,  createSection);
// router.post("/addSection",  createSection);
// Update a Section
router.post("/updateSection", auth,  updateSection);
// router.post("/updateSection",  updateSection);
// Delete a Section
router.post("/deleteSection", auth,  deleteSection);
// router.post("/deleteSection",  deleteSection);
// Edit Sub Section
router.post("/updateSubSection", auth,  updateSubSection);
// router.post("/updateSubSection",  updateSubSection);
// Delete Sub Section
router.post("/deleteSubSection", auth,  deleteSubSection);
// router.post("/deleteSubSection",   deleteSubSection);
// Add a Sub Section to a Section
router.post("/addSubSection", auth,  createSubSection);
// router.post("/addSubSection",   createSubSection);
// Get all Registered Courses
router.get("/getAllCourses", getAllCourses);
// Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails);
// Get Details for a Specific Courses
router.post("/getFullCourseDetails", auth, getFullCourseDetails);
// router.post("/getFullCourseDetails",  getFullCourseDetails);
// Edit Course routes
router.post("/editCourse", auth,  editCourse);
// router.post("/editCourse",   editCourse);
// Get all Courses Under a Specific Instructor
router.get("/getInstructorCourses", auth,  getInstructorCourses);
// router.get("/getInstructorCourses",  getInstructorCourses);
// Delete a Course
router.delete("/deleteCourse", deleteCourse);

router.post("/updateCourseProgress", auth,  updateCourseProgress);
// router.post("/updateCourseProgress",   updateCourseProgress);

// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory",  createCategory);
// router.get("/showAllCategories", showAllCategories);
router.post("/getCategoryPageDetails", categoryPageDetails);

// !before in showAllCategories when write "auth" this create the problem status code 401 not found
router.get("/showAllCategories", showAllCategories);

// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/createRating", auth,  createRating);
// router.post("/createRating",  createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRating);

module.exports = router;
