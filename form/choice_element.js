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
import Element from './element';

/**
 * @parent Mad.form_api
 * @inherits mad.Component
 *
 * The Choice Form Element.
 * This form element shouldn't be instantiated.
 * @todo TBD
 */
const ChoiceElement = Element.extend('mad.form.ChoiceElement', /* @static */ {

  defaults: {
    // The form choice element available values.
    availableValues: {},
    // The class to put in the parent div, for each value
    valueClasses: {}
  }

}, /** @prototype */ {

  /**
   * Implements beforeRender hook().
   */
  beforeRender: function() {
    this._super();
    this.setViewData('id', this.options.id);
    this.setViewData('availableValues', this.options.availableValues);
    this.setViewData('counter', 0);
    this.setViewData('valueClasses', this.options.valueClasses);
    this.setViewData('state', this.state);
  },

  /**
   * Set the available values
   */
  setAvailableValues: function(values) {
    this.options.availableValues = values;
    this.refresh();
  }

});

export default ChoiceElement;
