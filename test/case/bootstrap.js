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
import "cipherguard-mad/test/bootstrap";
import Config from 'cipherguard-mad/config/config';
import Construct from "can-construct";
import Bootstrap from "cipherguard-mad/bootstrap";
import Component from "cipherguard-mad/component/component";

describe("mad.Bootstrap", () => {
  it("should inherit can.Construct", () => {
    const AppControl = Component.extend('mad.test.bootstrap.AppControl', {
      defaults: {}
    }, { });

    const bootstrap = new Bootstrap();
    expect(bootstrap).to.be.instanceOf(Construct);
  });
});
