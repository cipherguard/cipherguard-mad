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
import Confirm from "cipherguard-mad/component/confirm";

$(function() {
    $('#show-confirm-dialog').click(function() {
        var confirm = new mad.component.Confirm(
            null, {
                label: 'Do you want to delete the password ?',
                content: 'This is a content test',
                action:function() {
                    alert('action is performed');
                }
            }).start();
        return false;
    });
});