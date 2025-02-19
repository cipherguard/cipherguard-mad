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
import DialogView from '../view/component/dialog';
import FreeCompositeComponent from './free_composite';
import HtmlHelper from '../helper/html';
import template from '../view/template/component/dialog/dialog.stache!';

/**
 * @parent Mad.components_api
 * @inherits {mad.component.FreeComposite}
 *
 * A dialog box implementation.
 *
 * ## Example
 * @demo demo.html#dialog/dialog
 *
 * @constructor
 * Instantiate a new Dialog Component.
 * @param {HTMLElement|can.NodeList|CSSSelectorString} el The element the control will be created on
 * @param {Object} [options] option values for the component.  These get added to
 * this.options and merged with defaults static variable
 * @return {Dialog}
 */
const Dialog = FreeCompositeComponent.extend('mad.component.Dialog', /** @static */ {

  defaults: {
    label: null,
    viewClass: DialogView,
    template: template,
    subtitle: null,
    titleInfo: null,
    cssClasses: ['dialog-wrapper'],
    tag: 'div'
  },

  /**
   * Close the latest dialog.
   */
  closeLatest: function() {
    $('.dialog-wrapper:last').remove();
  },

  /**
   * Instantiate a new Dialog.
   *
   * @param {Object} [options] option values for the component.  These get added to
   * this.options and merged with defaults static variable
   * @return {Dialog}
   */
  instantiate: function(options) {
    // Create the DOM entry point for the dialog
    let refElt = $('body');
    let position = 'first';

    // If a dialog already exist, position the new one right after.
    const $existingDialog = $('.dialog-wrapper:last');
    if ($existingDialog.length) {
      refElt = $existingDialog;
      position = "after";
    }

    // Insert the element in the page DOM.
    const $el = HtmlHelper.create(refElt, position, '<div/>');

    return new Dialog($el[0], options);
  }


}, /** @prototype */ {

  /**
   * @inheritdoc
   */
  beforeRender: function() {
    this.setViewData('subtitle', this.options.subtitle);
    this.setViewData('titleInfo', this.options.titleInfo);
  },

  /**
   * Add a component to the dialog container
   * @param {Component.prototype} Class The class of the component to add, or the html to
   *   display.
   * @param {object} options Option of the component
   * @return {Component}
   */
  add: function(Class, options) {
    if (typeof options == 'undefined' || options == null) {
      options = {};
    }

    const component = this.addComponent(Class, options, 'js_dialog_content');
    component.start();

    return component;
  },

  /**
   * Set the title
   * @param {string} title The new title
   */
  setTitle: function(title) {
    this.view.setTitle(title);
  },

  /**
   * Set the subtitle
   * @param {string} subtitle The new subtitle
   */
  setSubtitle: function(subtitle) {
    this.view.setSubtitle(subtitle);
  }
});

export default Dialog;
