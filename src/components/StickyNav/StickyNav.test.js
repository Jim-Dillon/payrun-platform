import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StickyNav from './StickyNav';

test('StickyNav becomes sticky on scroll', () => {
    render(<StickyNav selectedCount={0} selectedAmount={0} />);

    const navElement = screen.getByRole('navigation');

    expect(navElement).not.toHaveClass('sticky');
    const placeholder = navElement.previousSibling;
    expect(placeholder).toHaveStyle('display: none');

    Object.defineProperty(navElement, 'offsetTop', { value: 100 });

    window.scrollY = 150;
    window.dispatchEvent(new Event('scroll'));

    expect(navElement).toHaveClass('sticky');
    expect(placeholder).toHaveStyle('display: block');
});
