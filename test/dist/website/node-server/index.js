"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var body_parser_1 = tslib_1.__importDefault(require("body-parser"));
var express_1 = tslib_1.__importDefault(require("express"));
var defaults_middleware_1 = tslib_1.__importDefault(require("./defaults.middleware"));
var liveness_endpoint_1 = tslib_1.__importDefault(require("./liveness.endpoint"));
var render_endpoint_1 = tslib_1.__importDefault(require("./render.endpoint"));
var MAX_JSON_SIZE_LIMIT = '10mb';
function start() {
    var port = 21060;
    var app = express_1.default();
    var jsonParser = body_parser_1.default.json({ limit: MAX_JSON_SIZE_LIMIT });
    app.post('/render', jsonParser, render_endpoint_1.default);
    app.get('/self-test', liveness_endpoint_1.default);
    app.use('/defaults/', defaults_middleware_1.default);
    app.listen(port, function () {
        console.log("Server started on port: " + port);
    });
}
start();
//# sourceMappingURL=index.js.map