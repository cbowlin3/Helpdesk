// Import express components
import express, { Request, Response } from 'express';

// Import routes
const exampleRouteRouter = require('./routes/exampleRoute');

// Express startup
const app = express();
const router = express.Router();
const port = 3000;

// Example index page
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// Assign routers to routes
app.use('/exampleRoute', exampleRouteRouter);

// Make server listen to the port
app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});