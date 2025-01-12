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
import HtmlHelper from 'cipherguard-mad/helper/html';

describe("Html", () => {
  describe('create()', () => {
    it("instantiates and inserts html content", () => {
      // Inside replace strategy
      var refElement = $('#test-html'),
        position = 'inside_replace',
        id = "inside_replace_element",
        content = `<div id="${id}"/>`;
      var $component = HtmlHelper.create(refElement, position, content);
      expect($(`#${id}`).length).to.be.not.equal(0);
      expect($('#test-html').children().length).to.be.equal(1);

      // Before strategy
      var refElement = $('#inside_replace_element'),
        position = 'before',
        id = "before_element",
        content = `<div id="${id}"/>`;
      var $component = HtmlHelper.create(refElement, position, content);
      expect($(`#${id}`).length).to.be.not.equal(0);
      expect($('#test-html').children().length).to.be.equal(2);
      expect(refElement.prev().attr('id')).to.be.equal(id);

      // After strategy
      var refElement = $('#inside_replace_element'),
        position = 'after',
        id = "after_element",
        content = `<div id="${id}"/>`;
      var $component = HtmlHelper.create(refElement, position, content);
      expect($(`#${id}`).length).to.be.not.equal(0);
      expect($('#test-html').children().length).to.be.equal(3);
      expect(refElement.next().attr('id')).to.be.equal(id);

      // First strategy
      var refElement = $('#test-html'),
        position = 'first',
        id = "first_element",
        content = `<div id="${id}"/>`;
      var $component = HtmlHelper.create(refElement, position, content);
      expect($(`#${id}`).length).to.be.not.equal(0);
      expect($('#test-html').children().length).to.be.equal(4);
      expect(refElement.children().first().attr('id')).to.be.equal(id);

      // Last strategy
      var refElement = $('#test-html'),
        position = 'last',
        id = "last_element",
        content = `<div id="${id}"/>`;
      var $component = HtmlHelper.create(refElement, position, content);
      expect($(`#${id}`).length).to.be.not.equal(0);
      expect($('#test-html').children().length).to.be.equal(5);
      expect(refElement.children().last().attr('id')).to.be.equal(id);

      $('#test-html').empty();
    });
  });
});
