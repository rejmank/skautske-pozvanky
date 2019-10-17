import React from 'react';
import Header from './Header';

test('header', () => {
  expect(<Header />).toMatchSnapshot();
});
