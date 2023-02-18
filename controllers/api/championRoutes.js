const router = require('express').Router();// Import the express package and use the Router() method to create a new router object
const Champion = require('../../models/champion');// Import the Champion model from the models/Champion.js file


router.get('/', async (req, res) => {
    try {
        res.render('allChampions', {
        })
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
});

module.exports = router;// Export the router object to be used in the server.js file