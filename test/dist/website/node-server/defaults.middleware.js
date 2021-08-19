"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express = tslib_1.__importStar(require("express"));
var path = tslib_1.__importStar(require("path"));
var defaultsDir = process.env.NODE_ENV === 'development' ? '/../client/defaults' : '/../defaults';
exports.default = express.static(path.join(__dirname, defaultsDir));
//# sourceMappingURL=defaults.middleware.js.map