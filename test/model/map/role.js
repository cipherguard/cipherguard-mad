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
import DefineList from 'cipherguard-mad/model/list/list';
import I18n from "cipherguard-mad/util/lang/i18n";
import MadMap from 'cipherguard-mad/model/map/map';

const Role = MadMap.extend('mad.test.model.Role', {
  name: 'string',
  test: 'string'
});
MadMap.setReference('Role', Role);

Role.List = DefineList.extend({'#': {Type: Role}});
Role.List.itemReference = Role;

Role.validationRules = {
  name: [
    {rule: ['lengthBetween', 3, 255], message: __('The name should be between 3 and 254 characters length.')}
  ]
};

export default Role;
