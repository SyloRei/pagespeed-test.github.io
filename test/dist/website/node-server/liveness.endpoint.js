"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function livenessEndpoint(_, res) {
    res.status(200);
    res.send("Liveness OK: " + new Date().getTime());
    res.end();
}
exports.default = livenessEndpoint;
//# sourceMappingURL=liveness.endpoint.js.map