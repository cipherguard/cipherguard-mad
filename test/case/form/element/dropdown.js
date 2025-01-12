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
import ChoiceFormElement from 'cipherguard-mad/form/choice_element';
import domEvents from 'can-dom-events';
import DropdownFormElement from "cipherguard-mad/form/element/dropdown";
import Component from 'cipherguard-mad/component/component';
import FormElement from 'cipherguard-mad/form/element';
import MadControl from 'cipherguard-mad/control/control';

let $dropdown = null;

describe("Dropdown", () => {
  beforeEach(() => {
    $dropdown = $('<select id="dropdown" />').appendTo($('#test-html'));
  });

  afterEach(() => {
    $('#test-html').empty();
  });

  describe("Constructor", () => {
    it("inherits pixie", () => {
      const dropdown = new DropdownFormElement('#dropdown', {});
      expect(dropdown).to.be.instanceOf(CanControl);
      expect(dropdown).to.be.instanceOf(Component);
      expect(dropdown).to.be.instanceOf(FormElement);
      expect(dropdown).to.be.instanceOf(ChoiceFormElement);
      dropdown.destroy();
    });
  });

  describe("getValue()", () => {
    it("returns the value of the element", done => {
      const dropdown = new DropdownFormElement('#dropdown', {
        availableValues: {
          ID_1: 'VALUE 1',
          ID_2: 'VALUE 2',
          ID_3: 'VALUE 3'
        },
        value: 'ID_1'
      }).start();

      // After all event handlers have done their treatment.
      setTimeout(() => {
        expect(dropdown.getValue()).to.be.equal('ID_1');
        dropdown.destroy();
        done();
      }, 0);
    });
  });

  describe("Events", () => {
    it("listens to changes on the component and triggers the event changed", done => {
      let firedChanged = false,
        dropdown = new DropdownFormElement('#dropdown', {
          availableValues: {
            ID_1: 'VALUE 1',
            ID_2: 'VALUE 2',
            ID_3: 'VALUE 3'
          },
          value: 'ID_1'
        }).start();

      // While the dropdown value change.
      $dropdown.on('changed', () => {
        firedChanged = true;
      });
      expect(firedChanged).to.be.false;

      // Simulate a keypress and check after the timeout
      $dropdown.val('ID_2');
      domEvents.dispatch($dropdown[0], 'change');

      // After all event handlers have done their treatment.
      setTimeout(() => {
        expect(dropdown.getValue()).to.be.equal('ID_2');
        expect(firedChanged).to.be.true;
        dropdown.destroy();
        done();
      }, 0);
    });
  });
});
