import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should log when test passes', () => {
  console.log('test');
  console.warn('test');
  console.error('test');
  expect(0).toEqual(0);
});

it('should log when test fails', () => {
  console.log('test');
  console.warn('test');
  console.error('test');
  expect(0).toEqual(1);
});
