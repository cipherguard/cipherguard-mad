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
const Checkbox = FormElementView.extend('mad.view.form.Checkbox', /* @static */ {

}, /** @prototype */ {

  /**
   * Get the value of the checkbox form element
   *
   * @return {array}
   */
  getValue: function() {
    const returnValue = [];
    $(this.element).find('input:checked').each(function() {
      returnValue.push($(this).val());
    });
    return returnValue;
  },

  /**
   * Set the value of the checkbox form element
   *
   * @param {array} value An array containing the value to check
   */
  setValue: function(value) {
    value = typeof value != 'undefined' && value != null ? value : [];
    $(this.element).find('input').each(function() {
      // if the value of the input is found in the array of value given, check the box
      if (value.indexOf($(this).val()) != -1) {
        $(this).attr('checked', true);
        $(this)[0].checked = true;
      } else {
        $(this)[0].checked = false;
        $(this).removeAttr('checked');
      }
    });
  },

  /* ************************************************************** */
  /* LISTEN TO THE VIEW EVENTS */
  /* ************************************************************** */

  /**
   * Listen to the view event click
   *
   * @param {HTMLElement} el The element the event occurred on
   * @param {HTMLEvent} ev The event that occurred
   */
  '{element} input click': function(el, ev) {
    ev.stopPropagation();

    if ($(el).is(':checked')) {
      domEvents.dispatch(this.element, {type: 'checked', data: $(el).val()});
    } else {
      domEvents.dispatch(this.element, {type: 'unchecked', data: $(el).val()});
    }
  },

  /**
   * Listen to the view event change
   *
   * @param {HTMLElement} el The element the event occurred on
   * @param {HTMLEvent} ev The event that occurred
   */
  '{element} input change': function(el, ev) {
    ev.stopPropagation();
    domEvents.dispatch(this.element, {type: 'changed', data: {
      value: this.getValue()
    }});
  }
});

export default Checkbox;
