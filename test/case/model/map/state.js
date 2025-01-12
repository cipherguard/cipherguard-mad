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
import MadMap from 'cipherguard-mad/model/map/map';
import State from 'cipherguard-mad/model/map/state';

describe("mad.model.State", () => {
  it("should inherit can.Model & mad.Model", () => {
    const state = new State();
    expect(state).to.be.instanceOf(MadMap);
    expect(state).to.be.instanceOf(State);
  });

  it("setState() should change the current state(s)", () => {
    const state = new State();

    expect(state.previous.length).to.be.equal(0);
    expect(state.current.length).to.be.equal(0);

    // Set the state to A.
    state.setState('A');

    expect(state.previous.length).to.be.equal(0);
    expect(state.current.length).to.be.equal(1);
    expect(state.is('A')).to.be.true;

    // Set the state to B.
    state.setState('B');
    expect(state.previous.length).to.be.equal(1);
    expect(state.current.length).to.be.equal(1);
    expect(state.is('A')).to.be.false;
    expect(state.is('B')).to.be.true;
    expect(state.was('A')).to.be.true;

    // Flush the current states list.
    state.setState();
    expect(state.previous.length).to.be.equal(1);
    expect(state.current.length).to.be.equal(0);
    expect(state.is('B')).to.be.false;
    expect(state.was('B')).to.be.true;
  });

  it("add() & remove() states", () => {
    const state = new State();

    // Set the state to A.
    state.addState('A');
    expect(state.previous.length).to.be.equal(0);
    expect(state.current.length).to.be.equal(1);
    expect(state.is('A')).to.be.true;

    // Set the state to B.
    state.addState('B');
    expect(state.previous.length).to.be.equal(1);
    expect(state.current.length).to.be.equal(2);
    expect(state.is('A')).to.be.true;
    expect(state.is('B')).to.be.true;
    expect(state.was('A')).to.be.true;

    // Remove the state A.
    state.removeState('A');
    expect(state.previous.length).to.be.equal(2);
    expect(state.current.length).to.be.equal(1);
    expect(state.was('A')).to.be.true;
    expect(state.was('B')).to.be.true;
    expect(state.is('A')).to.be.false;
    expect(state.is('B')).to.be.true;

    // Remove the state B.
    state.removeState('B');
    expect(state.previous.length).to.be.equal(1);
    expect(state.current.length).to.be.equal(0);
    expect(state.was('A')).to.be.false;
    expect(state.was('B')).to.be.true;
    expect(state.is('A')).to.be.false;
    expect(state.is('B')).to.be.false;
  });
});
