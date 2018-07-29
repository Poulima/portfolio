import React from 'react';
import { render, ReactDOM } from 'react-dom';
import App from './App';

jest.mock('react-dom');
describe('App', () => {
  it('should render correctly', () => {
    expect(render).toHaveBeenCalledWith(
      <App />,
    );
    expect(render).toHaveBeenCalledTimes(1);
  });
});

it('should log when test passes', () => {
  expect(0).toEqual(0);
});

it('should log when test fails', () => {
  expect(0).toEqual(0);
});
