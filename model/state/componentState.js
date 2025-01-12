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
import DefineMap from 'can-define/map/map';

const ComponentState = DefineMap.extend({
  destroyed: {
    type: 'boolean',
    default: false
  },
  disabled: {
    type: 'boolean',
    default: false
  },
  empty: {
    type: 'boolean',
    default: false
  },
  hidden: {
    type: 'boolean',
    default: false
  },
  loaded: {
    type: 'boolean',
    default: false
  },
  started: {
    type: 'boolean',
    default: false
  }
});

export default ComponentState;
