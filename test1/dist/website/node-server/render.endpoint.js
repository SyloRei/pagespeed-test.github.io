"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_server_renderer_1 = require("vue-server-renderer");
// Возвращает кастомный CSS в теге <style>, готовый для встраивания в страницу IS.
// Если кастомный CSS не задан, возвращает пустую строку.
function formatCustomCss(state) {
    var _a, _b;
    var sanitizedCustomCss = (_b = (_a = state.siteSettings) === null || _a === void 0 ? void 0 : _a.externalContent) === null || _b === void 0 ? void 0 : _b.sanitizedCustomCss;
    if (sanitizedCustomCss) {
        return "<style>" + sanitizedCustomCss + "</style>";
    }
    return '';
}
function renderStyles(context) {
    var resourceBaseUrl = context.request.context.resourceBaseUrl;
    return context.renderStyles()
        .replace(/{resource_base_url_placeholder}/g, resourceBaseUrl);
}
function templateProcessor(result, context) {
    var html = result.replace(/&amp;/g, '&');
    var template = {
        html: html,
        style: renderStyles(context),
        state: JSON.stringify(context.state),
        meta: context.meta.inject().head(),
        customCss: formatCustomCss(context.state),
    };
    return JSON.stringify(template);
}
function createRenderer() {
    var bundle;
    var clientManifest;
    if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line import/no-unresolved,global-require
        bundle = require('../../../../dist/website/vue-ssr-server-bundle.json');
        // eslint-disable-next-line import/no-unresolved,global-require
        clientManifest = require('../../../../dist/website/vue-ssr-client-manifest.json');
    }
    else {
        // eslint-disable-next-line import/no-unresolved,global-require
        bundle = require('../../dist/website/vue-ssr-server-bundle.json');
        // eslint-disable-next-line import/no-unresolved,global-require
        clientManifest = require('../../dist/website/vue-ssr-client-manifest.json');
    }
    return vue_server_renderer_1.createBundleRenderer(bundle, {
        runInNewContext: false,
        template: templateProcessor,
        clientManifest: clientManifest,
    });
}
var renderer = createRenderer();
function createResponseHandler(res) {
    return function (html) {
        res.status(200);
        res.send(html);
        res.end();
    };
}
function createExceptionHandler(req, res) {
    return function (err) {
        res.status(500).end('500 | Internal Server Error');
        console.error("Error during render : " + req.url);
        console.error(err.stack);
    };
}
function render(req, res) {
    var renderRequest = {
        context: tslib_1.__assign(tslib_1.__assign({}, req.body.context), { ssrRendered: true }),
        profile: req.body.profile,
        tileList: req.body.tileList,
    };
    var context = {
        request: renderRequest,
    };
    renderer.renderToString(context)
        .then(createResponseHandler(res))
        .catch(createExceptionHandler(req, res));
}
function renderEndpoint(req, res) {
    res.setHeader('Content-Type', 'application/json');
    render(req, res);
}
exports.default = renderEndpoint;
//# sourceMappingURL=render.endpoint.js.map