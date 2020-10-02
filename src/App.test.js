import React from 'react';
import {fireEvent, render} from '@testing-library/react';
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
  expect(image.getAttribute("src")).toMatch(/img1.png/);
});

test('renders correct image when button 2 clicked', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button-2'));
  const image = getByTestId("img");
  expect(image.getAttribute("src")).toMatch(/img2.png/);
});

test('renders next image when image is clicked ', () => {
  const { getByTestId } = render(<App />);
  const image = getByTestId('img');
  fireEvent.click(image);
  expect(image.getAttribute("src")).toMatch(/img2.png/);
  fireEvent.click(image);
  expect(image.getAttribute("src")).toMatch(/img3.jpg/);
});


test('set active state to buttons according to current image', () => {
  const { getByTestId } = render(<App />);
  const image = getByTestId('img');
  expect(getByTestId("button-1")).toHaveClass('active');
  fireEvent.click(image);
  expect(getByTestId("button-1")).not.toHaveClass('active');
  expect(getByTestId("button-2")).toHaveClass('active');
});
