import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThingAMonth from './ThingAMonth';

describe('<ThingAMonth />', () => {
  test('it should mount', () => {
    render(<ThingAMonth />);
    
    const thingAMonth = screen.getByTestId('ThingAMonth');

    expect(thingAMonth).toBeInTheDocument();
  });
});