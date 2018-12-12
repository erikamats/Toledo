const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
const gradebookController = require('../controllers/gradebookController');
const homepageController = require('../controllers/homepageController');

const router = express.Router();

router.get('/', homepageController.sendSampleDataAsJSON)

router.post('/register-student', catchErrors(gradebookController.saveStudent));
router.post('/register-gradebook', catchErrors(gradebookController.saveGradebook));
router.post('/register-assignment', catchErrors(gradebookController.saveAssignment));
router.post('/register-course', gradebookController.saveCourse);

module.exports = router;
