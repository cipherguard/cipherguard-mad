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
import stache from 'can-stache';
import View from '../../../view';

import cellTemplate from '../../../template/component/grid/gridCell.stache!';

// Register a stache helper to help the grid to render the cells.
stache.registerHelper('gridCell', (gridColumn, options) => {
  let template = gridColumn.template;
  if (!template) {
    template = cellTemplate;
  }
  return View.render(template, options);
});
