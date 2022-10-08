import React from 'react';
import { render, screen } from '@testing-library/react';
import { TwentyFour } from './TwentyFour';

test('renders answer button', () => {
    render(<TwentyFour />);
    const linkElement = screen.getByText(/查看答案/i);
    expect(linkElement).toBeInTheDocument();
});
