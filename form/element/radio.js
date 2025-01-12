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
import ChoiceElement from '../choice_element';
import RadioView from '../../view/form/element/radio';
import template from '../../view/template/form/radio.stache!';

/**
 * @parent Mad.form_api
 * @inherits mad.Component
 *
 * The Radio Form Element
 */
const Radio = ChoiceElement.extend('mad.form.Radio', /* @static */ {

  defaults: {
    // Override the label option.
    label: 'Radio Form Element',
    // Override the tag option.
    tag: 'div',
    // Override the template option.
    template: template,
    // Override the viewClass option.
    viewClass: RadioView
  }

}, /** @prototype */ {

  /**
   * @inheritdoc
   */
  onDisabledChange: function(disabled) {
    if (disabled) {
      $(this.element).addClass('disabled');
      $('input', this.element).attr('disabled', 'disabled').addClass('disabled');
    } else {
      $(this.element).removeClass('disabled');
      $('input', this.element).removeAttr('disabled').removeClass('disabled');
    }
  }

});

export default Radio;
