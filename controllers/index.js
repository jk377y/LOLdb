const router = require('express').Router(); // Import the express package and use the Router() method to create a new router object
const homeRoutes = require('./homeRoutes.js'); // Import the home routes from the home-routes.js file



router.use('/', homeRoutes);// Use the home routes when the user visits the homepage (localhost:3001/)

















module.exports = router;