import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Hello World text', () => {
    render(<App/>);
    const helloWorldElement = screen.getByText(/Hello World!/i);
    expect(helloWorldElement).toBeInTheDocument();
});