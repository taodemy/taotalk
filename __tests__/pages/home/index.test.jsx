import { render, screen } from '@testing-library/react';
import Home from '../../../src/pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders welcome text within home page', () => {
    render(<Home />);

    const welcomeText = screen.getByText('Hello, this is TaoTalk');

    expect(welcomeText).toBeInTheDocument();
  });
});
