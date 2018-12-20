const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
const gradebookController = require('../controllers/gradebookController');
const homepageController = require('../controllers/homepageController');

const router = express.Router();

router.get('/', homepageController.sendSampleDataAsJSON)
router.get('/students', catchErrors(gradebookController.getStudents))
router.get('/gradebooks', catchErrors(gradebookController.getGradebooks))
router.get('/assignments', catchErrors(gradebookController.getAssignments))

router.post('/register-student', catchErrors(gradebookController.saveStudent));
router.post('/register-gradebook', catchErrors(gradebookController.saveGradebook));
router.post('/register-assignment', catchErrors(gradebookController.saveAssignment));
router.post('/register-course', gradebookController.saveCourse);

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/me', userController.authenticateUser, userController.myProfile);

module.exports = router;
