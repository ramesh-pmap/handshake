// Dependencies.
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

// UI components.
import Mars from '../../src/components/Mars';

describe('Mars', () => {
  // Insert component into DOM.
  const el = TestUtils.renderIntoDocument(
      <Mars title= "Example Title" message="Example Message" />
  );

  // Get component.
  const title = TestUtils.findRenderedDOMComponentWithClass(el, 'panel-heading');
  const message = TestUtils.findRenderedDOMComponentWithClass(el, 'msg');

  // Test for existence.
  it('exists in the page', () => {
    expect(TestUtils.isCompositeComponent(el)).toBe(true);
  });

  // Test for title.
  it('has correct title', () => {
    const x = title.innerHTML;
    expect(x).toBe('Example Title');
  });

  // Test for message.
  it('has correct message', () => {
    const x = message.innerHTML;
    expect(x).toBe('Example Message');
  });
});
