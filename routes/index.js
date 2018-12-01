const express = require('express');

const gradebookController = require('../controllers/gradebookController');
const homepageController = require('../controllers/homepageController');
const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();

router.get('/', homepageController.sendSampleDataAsJSON)

router.get('/students', gradebookController.getStudents);
/*
If we were actually using async/await 
in the controller method we refer to, then we would wrap the method in 
`catchErrors`.
*/
router.get('/students-asynchronously', catchErrors(gradebookController.getStudentsAsynchronously));
router.post('/register-student', gradebookController.addStudent);

router.get('/courses', gradebookController.getCourses);
router.post('/register-course', gradebookController.addCourse);

router.get('/gradebooks', gradebookController.getGradebooks);

router.get('/assignments', gradebookController.getAssignments);

module.exports = router;
