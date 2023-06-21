import { render, screen } from '@testing-library/react';
import Header from '../../src/components/Home/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
  it('should render header successfully', () => {
    render(<Header />);
    const headerTitle = screen.getByText('TaoTalk');
    expect(headerTitle).toBeInTheDocument();
  });
});
