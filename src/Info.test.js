import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Info from './Info';

describe('Info', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Info info={{ type: 'smartphone', os: 'iOS'}} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
