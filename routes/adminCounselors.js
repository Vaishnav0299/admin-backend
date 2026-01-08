const router = require('express').Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/adminOnly');
const ctrl = require('../controllers/counselorsController');

router.use(auth, admin);
router.get('/', ctrl.getCounselors);

module.exports = router;
