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
import Ajax from 'cipherguard-mad/net/ajax';
import connect from 'can-connect';
import connectDataUrl from 'can-connect/data/url/url';
import connectParse from 'can-connect/data/parse/parse';
import connectConstructor from 'can-connect/constructor/constructor';
import connectMap from 'can-connect/can/map/map';
import connectStore from 'can-connect/constructor/store/store';
import connectConstructorHydrate from 'can-connect/can/constructor-hydrate/constructor-hydrate';
import DefineList from 'cipherguard-mad/model/list/list';
import DefineMap from 'cipherguard-mad/model/map/map';
import I18n from "cipherguard-mad/util/lang/i18n";
import Profile from 'cipherguard-mad/test/model/map/profile';
import Role from 'cipherguard-mad/test/model/map/role';

const User = DefineMap.extend('mad.test.model.User', {
  id: 'string',
  username: 'string',
  email: 'string',
  active: 'boolean',
  profile: Profile,
  role: Role.List
});
DefineMap.setReference('User', User);

User.List = DefineList.extend({'#': {Type: User}});
User.List.itemReference = User;

User.validationRules = {
  id: [
    {rule: 'uuid'}
  ],
  email: [
    {rule: 'email', message: __('The email should be a valid email address.')}
  ],
  username: [
    {rule: 'required', message:  __('A username is required.')},
    {rule: 'notEmpty', message:  __('A username is required.')},
    {rule: 'utf8', message:  __('The username should be a valid utf8 string.')},
    {rule: ['lengthBetween', 0, 255], message: __('The username length should be maximum 254 characters.')}
  ]
};

User.connection = connect([connectParse, connectDataUrl, connectConstructor, connectStore, connectMap, connectConstructorHydrate], {
  Map: User,
  List: User.List,
  url: {
    resource: '/',
    getListData: function(params) {
      return Ajax.request({
        url: '/test/users',
        type: 'GET',
        params: params
      });
    },
    destroyData: 'DELETE /test/users/{id}'
  }
});

export default User;
