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
import CanControl from "can-control";
import MadControl from 'cipherguard-mad/control/control';

describe("Control", () => {
  describe("Constructor", () => {
    it("inherits Centaur", () => {
      const control = new MadControl('#test-html');
      expect(control).to.be.instanceOf(CanControl);
      expect(control).to.be.instanceOf(MadControl);
      control.destroy();
    });
  });
});
