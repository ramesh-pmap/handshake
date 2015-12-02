// Dependencies.
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

// UI components.
import Header from '../../src/components/Header';

describe('Header', () => {
  // Insert component into DOM.
  const el = TestUtils.renderIntoDocument(
      <Header />
  );

  // Test for existence.
  it('exists in the page', () => {
    expect(TestUtils.isCompositeComponent(el)).toBeTruthy();
  });

  // Test for returned node.
  it('should output a header tag', () => {
    expect(TestUtils.findRenderedDOMComponentWithTag(el, 'header'));
  });

  // Test for returned node.
  // it('should output an h1 tag', () => {
  //   expect(TestUtils.findRenderedDOMComponentWithTag(el, 'h1'));
  // });
});
