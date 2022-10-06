import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
    const { getByAltText } = render(<BrowserRouter> <App /></BrowserRouter>);
    getByAltText("logo");
});
