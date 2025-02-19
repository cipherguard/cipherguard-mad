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
import Construct from 'can-construct';
import getObject from 'can-util/js/get/get';
import setObject from '../util/set/set';
import mad from '../util/util';

/**
 * Our config utilities and environment.
 */
mad.config = mad.config || {};

/**
 * @parent Mad.core_api
 * @inherits mad.Control
 *
 * The mad config tool as for aim to centralize the configuration of the application.
 */
const MadConfig = Construct.extend('mad.Config', /** @static */ {

  /**
   * Load a config file
   *
   * @param {string} url Url of the config file to load
   * @param {string} key Configuration key where to store the config loaded. (Useful in case of duplicate keys).
   */
  loadFile: function(url, key) {
    const self = this;
    return $.ajax({
      url: url,
      async: false,
      dataType: 'json',
      success: function(data) {
        if (key !== undefined) {
          const dataWithKey = {};
          dataWithKey[key] = data;
          data = dataWithKey;
        }
        self.load(data);
      }
    });
  },

  /**
   * Load a config array of variables.
   *
   * @param {array} config The config array
   */
  load: function(config) {
    $.extend(true, mad.config, config);
  },

  /**
   * Retrieve a config variable
   *
   * @param {string} name The name of the config variable to retrieve.
   *
   * @return {mixed}
   */
  read: function(name) {
    return getObject(mad.config, name);
  },

  /**
   * Store a config variable.
   *
   * @param {string} name The name of the config variable to set.
   * @param {mixed} value The value of the config variable to set.
   */
  write: function(name, value) {
    setObject(mad.config, name, value);
  },

  /**
   * Flush the config.
   */
  flush: function() {
    for (const i in mad.config) {
      delete mad.config[i];
    }
  }

}, { });

export default MadConfig;
