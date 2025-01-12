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
import Component from "cipherguard-mad/component/component";
import CompositeComponent from "cipherguard-mad/component/composite";
import DialogComponent from "cipherguard-mad/component/dialog";
import domEvents from 'can-dom-events';
import FreeCompositeComponent from "cipherguard-mad/component/free_composite";
import MadControl from 'cipherguard-mad/control/control';

describe("Dialog", () => {
  afterEach(() => {
    $('.dialog-wrapper').remove();
  });

  it("inherits giant", () => {
    const dialog = DialogComponent.instantiate({label: 'Dialog Test'}).start();
    expect(dialog).to.be.instanceOf(CanControl);
    expect(dialog).to.be.instanceOf(MadControl);
    expect(dialog).to.be.instanceOf(Component);
    expect(dialog).to.be.instanceOf(CompositeComponent);
    expect(dialog).to.be.instanceOf(FreeCompositeComponent);
    dialog.start();
  });

  it("is visible after start", () => {
    expect($('.dialog-wrapper').length).to.equal(0);
    const dialog = DialogComponent.instantiate({label: 'Dialog Test'}).start();
    expect($('.dialog').length).to.not.equal(0);
    expect($('.dialog').html()).to.contain('Dialog Test');
    expect($('.dialog').html()).to.contain('close');
  });

  it("can be closed by clicking on the close button", () => {
    const dialog = DialogComponent.instantiate({label: 'Dialog Test'}).start();
    expect($('.dialog').length).to.not.equal(0);
    domEvents.dispatch($('a.dialog-close')[0], 'click');
    expect($('.dialog').length).to.equal(0);
  });
});
