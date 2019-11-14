import React from 'react';
import { render } from '@testing-library/react';
import Thing from './Thing';
import 'jest-styled-components';

describe('thing renders component', () => {
  test('renders correctly with no prop', () => {
    expect(render(<Thing />)).toMatchSnapshot();
  });

  test('renders correctly with thing as prop', () => {
    expect(
      render(
        <Thing
          thing={{
            name: 'test'
          }}
        />
      )
    ).toMatchSnapshot();
  });
  test('renders correctly with thing as prop in bw mode', () => {
    expect(
      render(
        <Thing
          thing={{
            name: 'test'
          }}
          bw
        />
      )
    ).toMatchSnapshot();
  });
});
