/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) KhulnaSoft Ltd (https://www.khulnasoft.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) KhulnaSoft Ltd (https://www.khulnasoft.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.khulnasoft.com KhulnaSoft(tm)
 */
import Config from './config/config';
import Construct from 'can-construct';
import ErrorHandler from './error/error_handler';
import global from './util/global/global';
import HtmlHelper from './helper/html';
import MadBus from "./control/bus";
import I18n from "./util/lang/i18n";
import $ from 'jquery';

import madConfig from "./config/config.js";

// Load the default mad config.
// See mad/config/config.json
Config.load(madConfig);

/**
 * @inherits can.Construct
 * @parent Mad.core_api
 *
 * The Boostrap class is the application launcher. It takes care of initializing :
 *
 * * The application namespace ;
 * * The global variables ;
 * * The event bus ;
 * * The route handler ;
 * * The internationalization layer ;
 * * The application ;
 *
 *    ##Example
 *    The bootstrap use by the demo found in the documentation
 *
 * ```
 // Launch the application and its master pieces
 var boot = new cipherguard.bootstrap.AppBootstrap({ 'config': [ 'app/config/config.json' ] });
 * ```
 *
 * ##Config Example
 *
 * ```
 {
     "app": {
     "url": "http://cipherguard.local",
         "controllerElt": "#js_app_controller",
         "namespace": "cipherguard",
         "ControllerClassName": "cipherguard.controller.AppController"
 },
     "error": {
     "ErrorHandlerClassName": "cipherguard.helper.ErrorHandler"
 },
     "event": {
     "eventBusControllerElt": "#js_bus_controller"
 },
     "i18n": {
     "lang": "EN-en"
 },
     "route": {
     "defaultRoute": {
         "extension": "cipherguard",
             "controller": "passwordWorkspace",
             "action": "index"
     }
 }
  *	```
  *
  * @constructor
 * Creates a Application Bootstrap
 * @param {Array} options Array of options
 * @param {String} options.appControllerId Id of the application controller. A DOM element with this ID must
 * exist on your page. Default : app-controller
 * @param {Array} options.dispatchOptions Array of options for the dispatcher. See the Class mad.bootstrap.DispatcherInterface
 * @param {Array} defaultRoute The default route used by the dispatcher
 * @param {String} defaultRoute.extension The default extension
 * @param {String} defaultRoute.controller The default controller
 * @param {String} defaultRoute.action The default action
 * @return {mad.bootstrap.AppBootstrap}
 */
var Bootstrap = Construct.extend('mad.Bootstrap', /* @static */ {

    defaults: {
        // Callbacks.
        callbacks: {
            // The application is ready.
            ready: null
        }
    }

}, /**  @prototype */ {

    // constructor like
    init: function () {
        // Define the error handler
        Config.write('error.ErrorHandlerClass', ErrorHandler);

        // Define the APP_URL
        var baseUrl = $('base').attr('href');
        global('APP_URL', baseUrl);

        // Initialize the event bus.
        this.initEventBus();
    },

    /**
     * Initialize the Application Event Bus Controller.
     */
    initEventBus: function () {
        var elt = HtmlHelper.create(
            $('body'),
            'first',
            '<div id="bus"/>'
        );
        var bus = MadBus.singleton('#bus');
        mad.bus = bus;
    }
});

export default Bootstrap;
