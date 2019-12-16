import { html, fixture, expect } from '@open-wc/testing';

import './bulib-color';

describe('Color', () => {
  it('has a default color of red', async () => {
    const el = await fixture(html`
      <bulib-color val="red"></bulib-color>
    `);

    expect(el.val).to.equal('red');
  });
});