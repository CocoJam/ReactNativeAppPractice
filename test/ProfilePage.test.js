import React from 'react';
import ProfilePage from '../NavgationsPages/ProfilePage.js';
import renderer from 'react-test-renderer';

test('renders ProfilePage correctly', () => {
    const tree = renderer.create(<ProfilePage />).toJSON();
    expect(tree).toMatchSnapshot();
});