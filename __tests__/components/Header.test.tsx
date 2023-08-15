import { render, screen } from '@testing-library/react';
import Header from '../../src/layout/Header';
import '@testing-library/jest-dom/extend-expect';
import { sessionData } from '../../mockData/mockSessionData';

describe('render while signed in', () => {
  beforeEach(() => {
    render(<Header session={sessionData} />);
  });

  it('should render header Title successfully', () => {
    const headerTitle = screen.getByText('TaoTalk');
    expect(headerTitle).toBeInTheDocument();
  });

  it('render First letter of the username', () => {
    const FirstCharacter = screen.getByText('F');
    expect(FirstCharacter).toBeInTheDocument();
  });
});

describe('render while signed out', () => {
  beforeEach(() => {
    render(<Header session={null} />);
  });

  it('should render header Title successfully', () => {
    const headerTitle = screen.getByText('TaoTalk');
    expect(headerTitle).toBeInTheDocument();
  });

  it('renders a sign in button', () => {
    const button = screen.getByRole('button', { name: /Sign in/i });
    expect(button).toBeInTheDocument();
  });
});
