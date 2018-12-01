const express = require('express');

const gradebookController = require('../controllers/gradebookController');
const homepageController = require('../controllers/homepageController');
const { catchErrors } = require('../handlers/errorHandlers');
const courseController = require('../controllers/courseController');

const router = express.Router();

// So if we go to `localhost:5000/` then the following route
// is what will happen:
router.get('/', homepageController.sendSampleDataAsJSON)

// If we were actually using async/await in the controller method we refer to, then we would wrap
// the method in `catchErrors`
router.get('/students', gradebookController.getStudents);
router.get('/students-asynchronously', catchErrors(gradebookController.getStudentsAsynchronously));
router.post('/register-student', gradebookController.addStudent);

router.get('/course', courseController.getCourses);
router.get('/courses', gradebookController.getCourses);
router.get('/courses-asynchronously', catchErrors(gradebookController.getCoursesAsynchronously));
router.post('/register-course', gradebookController.addCourse);


module.exports = router;
