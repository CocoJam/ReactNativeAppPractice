import React from 'react';
import NormalPage from '../NavgationsPages/NormalPage.js';
import renderer from 'react-test-renderer';

test('renders NormalPage correctly', () => {
    const tree = renderer.create(<NormalPage />).toJSON();
    expect(tree).toMatchSnapshot();
});