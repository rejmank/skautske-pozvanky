import React from 'react';
import { render } from '@testing-library/react';
import Layout from './layout';
import 'jest-styled-components';

test('layout', () => {
  expect(render(<Layout left={<div />} right={<div />} />)).toMatchSnapshot();
});
