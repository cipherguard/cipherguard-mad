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
import fixture from "can-fixture";
import Response from 'cipherguard-mad/net/response';
import uuid from 'uuid/v4';

// Server success ajax request
fixture({
  type: 'POST',
  url: '/ajax/success'
}, params => ({
  header: {
    id: uuid(),
    status: Response.STATUS_SUCCESS,
    title: 'Ajax Unit Test fixture title',
    message: 'Ajax Unit Test fixture message',
    controller: 'controllerName',
    action: 'actionName'
  },
  body: 'success response'
}));

// Server error ajax request
fixture({
  type: 'POST',
  url: '/ajax/error'
}, params => ({
  header: {
    id: uuid(),
    status: Response.STATUS_ERROR,
    title: 'Ajax Unit Test fixture title',
    message: 'Ajax Unit Test fixture message',
    controller: 'controllerName',
    action: 'actionName'
  },
  body: 'error response'
}));
