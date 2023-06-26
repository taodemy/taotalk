import { render, screen } from '@testing-library/react';
import SprintPage from '../../../src/pages/sprint-1';
import '@testing-library/jest-dom';

describe('SprintPage', () => {
  beforeEach(() => {
    render(<SprintPage />);
  });
  // Tests for Sprint section
  it('renders a running image', () => {
    const runningImg = screen.getByRole('img', { name: /running figure/i });
    expect(runningImg).toBeInTheDocument();
  });

  it('renders a sprint heading', () => {
    const heading = screen.getByText('speed task');
    expect(heading).toBeInTheDocument();
  });

  it('renders a sprint content', () => {
    const content = screen.getByText(
      'Trains the skill of fast translation. You have to choose if the translation corresponds to the suggested word'
    );
    expect(content).toBeInTheDocument();
  });

  it('renders a select notice', () => {
    const notice = screen.getByText('Choose a level:');
    expect(notice).toBeInTheDocument();
  });

  it('renders a select button', () => {
    const button = screen.getByRole('button', { name: /Get started/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a level selector', () => {
    const selector = screen.getByText('A1');
    expect(selector).toBeInTheDocument();
  });
});
