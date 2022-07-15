// Import express and express types
import express, { Request, Response } from "express";
const router = express.Router();

//Import controller
const exampleRouteController = require('../controllers/exampleRouteController');

// Assign route to controller handler
router.get('/', exampleRouteController.index);

// Export router for the route
module.exports = router;