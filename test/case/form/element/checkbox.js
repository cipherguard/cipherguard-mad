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
import "cipherguard-mad/test/bootstrap";
import CanControl from "can-control";
import CheckboxFormElement from "cipherguard-mad/form/element/checkbox";
import Component from 'cipherguard-mad/component/component';
import domEvents from 'can-dom-events';
import FormElement from 'cipherguard-mad/form/element';
import MadControl from 'cipherguard-mad/control/control';

let $checkbox = null;

describe("Checkbox", () => {
  beforeEach(() => {
    $checkbox = $('<div id="checkbox" type="text"></div>').appendTo($('#test-html'));
  });

  afterEach(() => {
    $('#test-html').empty();
  });

  describe("Constructor", () => {
    it("inherits thunderbirds", () => {
      const checkbox = new CheckboxFormElement('#checkbox', {});
      expect(checkbox).to.be.instanceOf(CanControl);
      expect(checkbox).to.be.instanceOf(Component);
      expect(checkbox).to.be.instanceOf(FormElement);
      checkbox.destroy();
    });
  });

  describe("Events", () => {
    it("listens to changes on the component and triggers the event changed", () => {
      let firedChanged = false,
        checkbox = new CheckboxFormElement('#checkbox', {
          availableValues: {
            'option_1': 'Option 1',
            'option_2': 'Option 2',
            'option_3': 'Option 3'
          }
        });

      // While the checkbox value change.
      $checkbox.on('changed', () => {
        firedChanged = true;
      });
      expect(firedChanged).to.be.false;

      // Start the checkbox.
      checkbox.start();

      // Simulate a click on an option
      $('input[value=option_1]').click();

      // Check that the option is well selected.
      expect(checkbox.getValue()).to.eql(['option_1']);
      expect(firedChanged).to.be.true;

      // Unselect the option
      firedChanged = false;
      $('input[value=option_1]').click();
      expect(checkbox.getValue()).to.eql([]);
      expect(firedChanged).to.be.true;

      // Select all options
      firedChanged = false;
      $('input').click();
      expect(checkbox.getValue()).to.eql(['option_1', 'option_2', 'option_3']);
      expect(firedChanged).to.be.true;

      checkbox.destroy();
    });
  });
});
