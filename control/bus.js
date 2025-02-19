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
import $ from 'jquery';
import Control from './control';
import domEvents from 'can-dom-events';

/**
 * @parent Mad.core_api
 * @inherits mad.Control
 *
 * The Event Bus is the communication heart of the application.
 * The Event Bus is a mechanism for 1) publishing events and 2) observing a subset of these
 * events.
 *
 * As the Event Bus is a Controller, it is implicitly associated to a DOM Element when it is
 * instantiated. The Event Bus will take advantages of the situation and uses the DOM events
 * mechanism to carry the transmissions.
 *
 * To trigger an event you have to call the mad.bus functions directly
 * MadBus.trigger('EVT_NAME', EventOptsArray);
 *
 * To observe an event it exists several solutions.
 *
 * 1) By using jQuery :
 * $(mad.bus).on('EVT_NAME', function() { ... });
 *
 * 2) By using the magic binding functions (templated) of canJS
 * '{mad.bus} EVT_NAME': function(evtOpts) { ... }
 *
 * 3) By using the bind function of the class
 * MadBus.bind('EVT_NAME', function(evtOpts) { ... });
 *
 * To trigger a request you have to call the mad.bus functions directly
 * MadBus.triggerRequest('RQST_NAME', RqstOptsArray);
 *
 * To observe a request it exists several solutions.
 *
 * 1) By using jQuery :
 * $(mad.bus.element).on('RQST_NAME', function(promise, evtOpts) { ... });
 *
 * 2) By using the magic binding functions (templated) of canJS
 * '{mad.bus.element} RQST_NAME': function(el, ev, promis, evtOpts) { ... }
 *
 * 3) By using the bind function of the class
 * MadBus.bind('RQST_NAME', function(promise, evtOpts) { ... });
 *
 * A promise is always passed as parameter of the observer function and has to be completed
 * by the function which takes care of the request.
 *
 */
const Bus = Control.extend('mad.Bus', /** @static */ {

  /**
   * Instance of Bus.
   */
  bus: null,

  /**
   * Instantiate or retrieve an existing bus.
   */
  singleton: function(el) {
    if (Bus.bus) {
      return Bus.bus;
    }
    const bus = new Bus(el);
    Bus.bus = bus;
    Bus.element = bus.element;
    return bus;
  },

  /**
   * Destroy the bus
   */
  destroy: function() {
    Bus.bus.destroy();
    Bus.bus = null;
  },

  /**
   * Trigger an event on the Event Bus.
   *
   * @param {String} eventName Event name
   * @param {Array} eventData (Optional) Data to associate to the event. The data has to be
   *  passed to the function as an array.
   */
  trigger: function(type, data, options) {
    options = options || {};
    const evOptions = {type: type};
    let dataKey = 'data';

    // If the sender wants to override the name of the data key
    if (options.dataKey) {
      dataKey = options.dataKey;
    }
    evOptions[dataKey] = data || {};

    domEvents.dispatch(Bus.element, evOptions);
  },

  /**
   * Trigger an event to the plugin
   * @param type
   * @param data
   */
  triggerPlugin: function(type, data) {
    const event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, true, true, data);
    document.documentElement.dispatchEvent(event);
  },

  /**
   * Trigger a request on the Event Bus.
   *
   * @param {String} eventName Event name
   * @param {Array} eventData (Optional) Data to associate to the event. The data has to be
   *  passed to the function as an array.
   *
   * @return {jQuery.Deferred.Promise} Return a promise to the caller.
   */
  triggerRequest: function(rqstName, rqstData) {
    let data = [];
    const deferred = $.Deferred();

    // The request data are in the expected format.
    if (Object.prototype.toString.call(rqstData) == "[object Array]") {
      data = rqstData;
    } else if (Object.prototype.toString.call(rqstData) == "[object Object]") {
      // If object format given, format it in array
      data = [rqstData];
    }

    // Observers of this request expect a promise as first parameter.
    data.unshift(deferred);

    // Trigger the request on the Event Bus.
    Bus.bus.trigger(rqstName, data);

    // Return the promise to the caller.
    return deferred.promise();
  },

  /**
   * Bind an event on the associated DOM element.
   *
   * @param {String} eventName Event name
   * @param {function} func The function to execute when the event is fired
   * @return {void}
   */
  bind: function(eventName, func) {
    $(Bus.element).bind(eventName, func);
  }


}, /** @prototype */ {

});

// Observe the addon-message and forward them to the eventBus.
window.addEventListener("addon-message", event => {
  Bus.trigger(event.detail.event, event.detail.data);
}, false);

export default Bus;
