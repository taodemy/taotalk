import { render, screen } from '@testing-library/react';
import AudioCallQuizPage from '../../../src/pages/audiocall-quiz';
import '@testing-library/jest-dom';

describe('AudioCallPracticePage', () => {
  beforeEach(() => {
    render(<AudioCallQuizPage />);
  });

  it('renders a prêt hypothécaire button', () => {
    const button = screen.getByRole('button', { name: /prêt hypothécaire/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a correct button', () => {
    const button = screen.getByRole('button', { name: /correct/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a selon laquelle button', () => {
    const button = screen.getByRole('button', { name: /selon laquelle/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a citer button', () => {
    const button = screen.getByRole('button', { name: /citer/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a nourriture button', () => {
    const button = screen.getByRole('button', { name: /nourriture/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a Next button', () => {
    const button = screen.getByRole('button', { name: /Next/i });
    expect(button).toBeInTheDocument();
  });
});
