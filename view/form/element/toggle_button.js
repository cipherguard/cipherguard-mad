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
import domEvents from 'can-dom-events';
import FormElementView from '../element';

/**
 * @inherits mad.view.form.Element
 */
const ToggleButton = FormElementView.extend('mad.view.form.ToggleButton', /* @static */ {

}, /** @prototype */ {

  /**
   * Set the value of the toggle button form element
   * @param {boolean} value The value to set
   */
  setValue: function(value) {
    const $checkbox = $('input', this.element);
    $checkbox.prop('checked', value);
  },

  /**
   * Listen to the view event click
   */
  '{element} .toggle-switch-button click': function() {
    if (this.getController().state.disabled) { return; }
    const $checkbox = $('input', this.element);
    const isChecked = $checkbox.is(':checked');
    domEvents.dispatch(this.element, {type: 'changed', data: {
      value: !isChecked
    }});
  },

  /**
   * Listen when the associated checkbox value change.
   */
  '{element} input change': function() {
    if (this.getController().state.disabled) { return; }
    const $checkbox = $('input', this.element);
    const isChecked = $checkbox.is(':checked');
    domEvents.dispatch(this.element, {type: 'changed', data: {
      value: isChecked
    }});
  }
});

export default ToggleButton;
