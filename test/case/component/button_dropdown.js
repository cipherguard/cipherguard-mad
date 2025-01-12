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
import Action from "cipherguard-mad/model/map/action";
import ButtonComponent from "cipherguard-mad/component/button";
import ButtonDropdown from "cipherguard-mad/component/button_dropdown";
import CanControl from "can-control";
import Component from "cipherguard-mad/component/component";
import domEvents from 'can-dom-events';
import MadControl from 'cipherguard-mad/control/control';

let $buttonDropdown = null;
let $debugOutput = null;

const instantiateDummyComponent = function() {
  const menuItems = [];
  var menuItem = new Action({
    id: 'i1',
    label: 'Item 1',
    action: function() {
      $debugOutput.html('item 1 clicked');
    }
  });
  menuItems.push(menuItem);
  var menuItem = new Action({
    id: 'i2',
    label: 'Item 2',
    action: function() {
      $debugOutput.html('item 2 clicked');
    }
  });
  menuItems.push(menuItem);
  const buttonDropdown = new ButtonDropdown('#button-dropdown', {
    items: menuItems
  });
  buttonDropdown.start();

  return buttonDropdown;
};

describe("ButtonDropdown", () => {
  beforeEach(() => {
    $buttonDropdown = $('<button id="button-dropdown"></ul>').appendTo($('#test-html'));
    $debugOutput = $('<div id="test-output"></div>').appendTo($('#test-html'));
  });

  afterEach(() => {
    $('#test-html').empty();
  });

  describe("Constructor", () => {
    it("inherits cyclops", () => {
      const buttonDropdown = new ButtonDropdown('#button-dropdown');
      expect(buttonDropdown).to.be.instanceOf(CanControl);
      expect(buttonDropdown).to.be.instanceOf(MadControl);
      expect(buttonDropdown).to.be.instanceOf(Component);
      expect(buttonDropdown).to.be.instanceOf(ButtonComponent);
      buttonDropdown.start();
      buttonDropdown.destroy();
    });

    it("renders its content on start", () => {
      expect($buttonDropdown.parent().text()).to.not.contain('Item 1');
      instantiateDummyComponent();
      expect($buttonDropdown.parent().text()).to.contain('Item 1');
      expect($buttonDropdown.parent().html()).to.contain('Item 2');
    });
  });

  describe("Event", () => {
    it("displays its content on click", () => {
      instantiateDummyComponent();
      let hasVisibleClass = $('.dropdown-content').hasClass('visible');
      expect(hasVisibleClass).to.be.false;
      domEvents.dispatch($buttonDropdown[0], 'click');
      hasVisibleClass = $('.dropdown-content').hasClass('visible');
      expect(hasVisibleClass).to.be.true;
    });

    it("hides its displayed content on click", () => {
      instantiateDummyComponent();
      let hasVisibleClass = $('.dropdown-content').hasClass('visible');
      expect(hasVisibleClass).to.be.false;
      domEvents.dispatch($buttonDropdown[0], 'click');
      hasVisibleClass = $('.dropdown-content').hasClass('visible');
      expect(hasVisibleClass).to.be.true;
      domEvents.dispatch($buttonDropdown[0], 'click');
      hasVisibleClass = $('.dropdown-content').hasClass('visible');
      expect(hasVisibleClass).to.be.false;
      domEvents.dispatch($buttonDropdown[0], 'click');
      hasVisibleClass = $('.dropdown-content').hasClass('visible');
      expect(hasVisibleClass).to.be.true;
    });

    it("executes action of the content menu item", () => {
      instantiateDummyComponent();
      let hasVisibleClass = $('.dropdown-content').hasClass('visible');
      expect(hasVisibleClass).to.be.false;
      domEvents.dispatch($buttonDropdown[0], 'click');
      hasVisibleClass = $('.dropdown-content').hasClass('visible');
      expect(hasVisibleClass).to.be.true;
      domEvents.dispatch($('#i1 a')[0], 'click');
      expect($debugOutput.text()).to.contain('item 1 clicked');
    });
  });
});
