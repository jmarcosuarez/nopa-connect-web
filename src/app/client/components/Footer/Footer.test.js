/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer';

test('Renders correctly', () => {
  const wrapper = shallow(
    <Footer />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
