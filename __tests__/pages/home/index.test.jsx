import { render, screen } from '@testing-library/react';
import Home from '../../../src/pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders welcome text within home page', () => {
    render(<Home />);

    const welcomeText = screen.getByText('Learning and teaching online, made easy.');

    expect(welcomeText).toBeInTheDocument();
  });
});
