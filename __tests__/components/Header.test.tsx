import { render, screen } from '@testing-library/react';
import Header from '../../src/layout/Header';
import '@testing-library/jest-dom/extend-expect';
import { sessionData } from '../../mockData/mockSessionData';

describe('Header', () => {
  it('should render header successfully', () => {
    render(<Header session={sessionData} />);
    const headerTitle = screen.getByText('TaoTalk');
    expect(headerTitle).toBeInTheDocument();
  });
});
