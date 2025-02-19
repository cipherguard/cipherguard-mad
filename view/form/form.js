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
 * @inherits mad.View
 */
const Form = View.extend('mad.view.Form', /* @static */ {}, /** @prototype */ {

  /**
   * Set the state of an embedded element.
   *
   * @param element
   * @param state
   */
  setElementState: function(element, state) {
    const eltId = element.getId();
    const $label = $(`label[for="${eltId}"]`);
    const $wrapper = $(element.element).parent('.js_form_element_wrapper');

    switch (state) {
      case 'success':
        if ($label) {
          $label.removeClass('error');
        }
        if ($wrapper) {
          $wrapper.removeClass('error');
        }
        break;
      case 'error':
        if ($label) {
          $label.addClass('error');
        }
        if ($wrapper) {
          $wrapper.addClass('error');
        }
        break;
    }
  }
});

export default Form;
