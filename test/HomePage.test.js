import React from 'react';
import HomePage from '../NavgationsPages/HomePage.js';
import renderer from 'react-test-renderer';

test('renders HomePage correctly', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
});