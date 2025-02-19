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
import MenuComponent from './menu';
import DropdownMenuView from '../view/component/dropdown_menu';

/**
 * @parent Mad.components_api
 * @inherits {mad.component.Menu}
 * @group mad.component.DropdownMenu.view_events 0 View Events
 *
 * The DropdownMenu component is an implementation of a dropdown menu.
 *
 * ## Example
 * @demo demo.html#dropdown_menu/dropdown_menu
 *
 * @constructor
 * Instantiate a new DropdownMenu Component.
 * @param {HTMLElement|can.NodeList|CSSSelectorString} el The element the control will be created on
 * @param {Object} [options] option values for the component.  These get added to
 * this.options and merged with defaults static variable
 *   * callbacks : callbacks that will be triggered on events :
 *      * item_selected : triggered when an item is selected.
 *      * item_right_selected : triggered when an item is right selected.
 *      * item_hovered : triggered when an item is hovered.
 * @return {mad.component.DropdownMenu}
 */
const DropdownMenu = MenuComponent.extend('mad.component.DropdownMenu', {

  defaults: {
    label: 'Drop Down Menu Component',
    viewClass: DropdownMenuView,
    cssClasses: ['dropdownmenu'],
    callbacks: {
      item_selected: null,
      item_right_selected: null,
      item_hovered: null
    }
  }

}, /** @prototype */ {

  /**
   * Open an item
   * @param {mad.model.Model} item The target item to open
   * @return {void}
   */
  open: function(item) {
    this.view.open(item);
  },

  /**
   * Close an item
   * @param {mad.model.Model} item The target item to close
   * @return {void}
   */
  close: function(item) {
    this.view.close(item);
  },

  /* ************************************************************** */
  /* LISTEN TO THE VIEW EVENTS */
  /* ************************************************************** */

  /**
   * An item has been uncollapsed
   * @parent mad.component.DropdownMenu.view_events
   * @param {HTMLElement} el The element the event occured on
   * @param {HTMLEvent} ev The event which occured
   */
  '{element} item_opened': function(el, ev) {
    const item = ev.data.item;
    this.open(item);
  },

  /**
   * An item has been uncollapsed
   * @parent mad.component.DropdownMenu.view_events
   * @param {HTMLElement} el The element the event occured on
   * @param {HTMLEvent} ev The event which occured
   */
  'element} item_closed': function(el, ev) {
    const item = ev.data.item;
    this.close(item);
  }
});

export default DropdownMenu;
