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
import View from '../view';

/**
 * @inherits jQuery.View
 *
 * @constructor
 *
 * @return {Tab}
 */
const Tab = View.extend('mad.view.component.Tab', /** @static */ { }, /** @prototype */ {

  /**
   * Select a tab
   * @param {string} tabId The target tab id
   * @return {void}
   */
  selectTab: function(tabId) {
    // add the selected class to the tab
    this.getController().getComponent(tabId)
      .view
      .addClass('selected');
    // add the selected class to the menu entry
    $(`#js_tab_nav_${tabId}`, this.element)
      .find('a')
      .addClass('selected');
  },

  /**
   * Unselect a tab
   * @param {string} tabId The target tab id
   * @return {void}
   */
  unselectTab: function(tabId) {
    // remove the selected class to the tab
    this.getController().getComponent(tabId)
      .view
      .removeClass('selected');
    // remove the selected class to the menu entry
    $(`#js_tab_nav_${tabId}`, this.element)
      .find('a')
      .removeClass('selected');
  }

});

export default Tab;
