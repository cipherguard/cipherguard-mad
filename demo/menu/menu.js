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
import Menu from "cipherguard-mad/component/menu";
import Action from "cipherguard-mad/model/map/action";

var menuSelector = 'ul#menu';
var menu = new mad.component.Menu(menuSelector);
menu.start();

// Add a link to filter on all items as first item.
var menuItems = [];
var menuItem = new mad.model.Action({
    id: '1',
    label: 'item 1',
    action: function () {
        alert('item 1 clicked');
    }
});
menuItems.push(menuItem);
var menuItem = new mad.model.Action({
    id: '2',
    label: 'item 2',
    action: function () {
        alert('item 2 clicked');
    }
});
menuItems.push(menuItem);
menu.load(menuItems);
