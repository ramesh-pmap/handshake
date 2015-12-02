// Dependencies.
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

// UI components.
import Footer from '../../src/components/Footer';

describe('Footer', () => {
  // Insert component into DOM.
  const el = TestUtils.renderIntoDocument(
      <Footer />
  );

  // Test for existence.
  it('exists in the page', () => {
    expect(TestUtils.isCompositeComponent(el)).toBeTruthy();
  });

  // Test for returned node.
  it('should output a footer tag', () => {
    expect(TestUtils.findRenderedDOMComponentWithTag(el, 'footer'));
  });

  // Test for returned node.
  // it('should output an h1 tag', () => {
  //   expect(TestUtils.findRenderedDOMComponentWithTag(el, 'h1'));
  // });
});

