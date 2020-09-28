import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Comradery from './Comradery';

describe('<Comradery />', () => {
  test('it should mount', () => {
    render(<Comradery />);
    
    const comradery = screen.getByTestId('Comradery');

    expect(comradery).toBeInTheDocument();
  });
});