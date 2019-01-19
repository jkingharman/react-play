import React from 'react';
import renderer from 'react-test-renderer';
import WeatherContainer from '../../components/WeatherContainer.js';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <WeatherContainer/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
