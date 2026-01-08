const router = require('express').Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/adminOnly');
const ctrl = require('../controllers/studentsController');

router.use(auth, admin);

router.get('/', ctrl.getStudents);

module.exports = router;
