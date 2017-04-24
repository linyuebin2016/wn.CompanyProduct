define(function (require, exports, module) {
    var angular = require('angular');
    var asyncLoader = require('angular-async-loader');

    require('angular-ui-router');

    var app = angular.module('app', ['ui.router']);
    var baseServer = "http://localhost/";
    /**基本api路径 */
    app.value('baseUrl', baseServer + '/WN.ProductStore.Api/');
    app.value('baseImgServer', baseServer + '/WN.ProductStore/');

    asyncLoader.configure(app);
    module.exports = app;
});