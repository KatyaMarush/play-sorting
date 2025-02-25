import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  it('should render the Home component', () => {
    render(<App />);
    const homeComponent = screen.getByRole('main'); // Checking for <main> tag from Home component
    expect(homeComponent).toBeInTheDocument();
  });
});
