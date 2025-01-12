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
import View from '../view';

/**
 * @inherits mad.View
 */
const Element = View.extend('mad.view.form.Element', /** @static */ {}, /** @prototype */ {

  /**
   * Get the name of the form element
   * @return {string}
   */
  getName: function() {
    return this.element.attr('name');
  },

  /**
   * Set the value of the form element
   * @param {mixed} value The value to set
   */
  // eslint-disable-next-line no-unused-vars
  setValue: function(value) {
    steal.dev.warn(`The setValue function has not been implemented for the class ${this.getClass().fullName}`);
  },

  /**
   * Reset the form element view
   */
  reset: function() {
    steal.dev.warn(`The reset function has not been implemented for the class ${this.getClass().fullName}`);
  }

});

export default Element;
