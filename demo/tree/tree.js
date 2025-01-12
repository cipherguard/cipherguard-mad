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
import Tree from "cipherguard-mad/component/tree";

var tree = new mad.component.Tree($('#tree'), {
    itemClass: mad.Model
});
tree.start();

var items = new mad.Model.List([{
    id: 'item_1',
    label: 'Item 1'
}, {
    id: 'item_2',
    label: 'Item 2',
    children: new mad.Model.List([{
        id: 'item_21',
        label: 'Item 21'
    }, {
        id: 'item_22',
        label: 'Item 22'
    }])
}, {
    id: 'item_3',
    label: 'Item 3'
}]);

tree.load(items);
