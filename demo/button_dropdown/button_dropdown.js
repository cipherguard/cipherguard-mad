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

// Create a list of actions.
var menuItems = [
    new mad.model.Action({
        'id': '1',
        'label': 'action 1',
        'cssClasses': ['todo'],
        'action': function () {
            alert('item 1 clicked');
        }
    }),
    new mad.model.Action({
        'id': '2',
        'label': 'action 2',
        'cssClasses': ['todo'],
        'action': function () {
            alert('item 2 clicked');
        }
    })
];

var buttonDropdown = new mad.component.ButtonDropdown($('#button-dropdown'), {
    'items': menuItems
}).start();
