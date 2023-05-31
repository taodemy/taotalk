import { render, screen } from '@testing-library/react';
import Footer, { FooterCopyright } from '../../src/layout/Footer';
import '@testing-library/jest-dom/extend-expect';

describe('Footer', () => {
  it('should render footer successfully', () => {
    render(<Footer />);
    expect(screen.getByText(FooterCopyright)).toBeInTheDocument();
  });
});
