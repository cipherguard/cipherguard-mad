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
import mad from "cipherguard-mad/cipherguard-mad";
import Button from "cipherguard-mad/component/button";

var button = new mad.component.Button($('#button'), {
    value: 'The value of the simple button',
    events: {
        'click': function (el, ev, value) {
            alert('click on simple button value : ' + value);
        }
    }
});
