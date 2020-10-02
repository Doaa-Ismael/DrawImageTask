import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders image', () => {
  const { getByTestId } = render(<App />);
  const imageComponent = getByTestId("img");
  expect(imageComponent).toBeInTheDocument();
});


test('renders 3 buttons', () => {
  const { getByText } = render(<App />);
  const button1 = getByText(/Button 1/i);
  const button2 = getByText(/Button 1/i);
  const button3 = getByText(/Button 1/i);
  expect(button1).toBeInTheDocument();
  expect(button2).toBeInTheDocument();
  expect(button3).toBeInTheDocument();
});

test('renders first image as default', () => {
  const { getByTestId } = render(<App />);
  const image = getByTestId("img");
  console.log("image ", image.getAttribute("src"));
  expect(image.getAttribute("src")).toMatch(/img1.png/);
});
