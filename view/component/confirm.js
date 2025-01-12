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
import DialogView from './dialog';
import domEvents from 'can-dom-events';

/**
 * @inherits mad.view.View
 */
const ConfirmView = DialogView.extend('mad.view.component.Confirm', /* @static */ {}, /** @prototype */ {

  /**
   * Listen to click on the confirm link
   * @param {HTMLElement} el The element the event occured on
   * @param {HTMLEvent} ev The event which occured
   * @return {void}
   */
  '{element} .js-dialog-confirm click': function(el, ev) {
    ev.preventDefault();
    domEvents.dispatch(this.element, {type: 'confirm_clicked'});
  }
});

export default ConfirmView;
