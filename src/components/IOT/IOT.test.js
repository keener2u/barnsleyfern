import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IOT from './IOT';

describe('<IOT />', () => {
  test('it should mount', () => {
    render(<IOT />);
    
    const iot = screen.getByTestId('IOT');

    expect(iot).toBeInTheDocument();
  });
});