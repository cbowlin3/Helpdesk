"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const exampleRouteRouter = require('./routes/exampleRoute');
const app = (0, express_1.default)();
const router = express_1.default.Router();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use('/exampleRoute', exampleRouteRouter);
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
//# sourceMappingURL=app.js.map