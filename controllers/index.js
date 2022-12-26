const router = require('express').Router();


// const dashboardRoutes = require('./dashboardRoutes');
const apiRoutes = require('./api');
const homepageRoutes = require('./homepageRoutes');

// router.use('/dashboard', dashboardRoutes);
router.use('/', homepageRoutes);
router.use('/api', apiRoutes);

module.exports = router;