const router = require('express').Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/adminOnly');
const ctrl = require('../controllers/analyticsController');

router.use(auth, admin);

router.get('/user-growth', ctrl.userGrowth);
router.get('/verification-status', ctrl.verificationStatus);

module.exports = router;
