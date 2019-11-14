import React from 'react';
import { render } from '@testing-library/react';
import Text from './text';
import 'jest-styled-components';

describe('Text component', () => {
  test('it renders text box of header', () => {
    expect(render(<Text type="header" />)).toMatchSnapshot();
  });
  test('it renders text box of normal', () => {
    expect(render(<Text type="normal" />)).toMatchSnapshot();
  });
  test('it renders text box of footer', () => {
    expect(render(<Text type="footer" />)).toMatchSnapshot();
  });
  test('it renders color of header', () => {
    expect(render(<Text color="#fcba03" type="header" />)).toMatchSnapshot();
  });
  test('it renders color of normal', () => {
    expect(render(<Text color="#fcba03" type="normal" />)).toMatchSnapshot();
  });
  test('it renders color of footer', () => {
    expect(render(<Text color="#fcba03" type="footer" />)).toMatchSnapshot();
  });
  test('it renders markdown of header', () => {
    expect(render(<Text markdown type="header" text="test **test**" />)).toMatchSnapshot();
  });
  test('it renders markdown of normal', () => {
    expect(render(<Text markdown type="normal" text="test **test**" />)).toMatchSnapshot();
  });
  test('it renders markdown of footer', () => {
    expect(render(<Text markdown type="footer" text="test **test**" />)).toMatchSnapshot();
  });

  test('it does not rened markdown if markdown = false', () => {
    expect(render(<Text type="footer" text="**test** test" />)).toMatchSnapshot();
  });
});
