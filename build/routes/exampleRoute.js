"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const router = express_1.default.Router();
const exampleRouteController = require('../controllers/exampleRouteController');
router.get('/', exampleRouteController.index);
module.exports = router;
//# sourceMappingURL=exampleRoute.js.map