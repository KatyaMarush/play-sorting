import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home Component', () => {
    it('should render the title', () => {
        render(<Home />);
        const titleElement = screen.getByText('Play sorting')
        expect(titleElement).toBeInTheDocument();
    })

    it('should render the description', () => {
        render(<Home />);
        const descriptionElement = screen.getByText('This is a simple web app to play around with sorting algorithms.')
        expect(descriptionElement).toBeInTheDocument();
    })

    it('should render Explore the algorithms button', () => {
        render(<Home />);
        const buttonElement = screen.getByText('Explore the algorithms')
        expect(buttonElement).toBeInTheDocument();
    })
})

export {};
