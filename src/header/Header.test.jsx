import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import 'jest-styled-components';

test('header', () => {
  expect(render(<Header />)).toMatchSnapshot();
});
