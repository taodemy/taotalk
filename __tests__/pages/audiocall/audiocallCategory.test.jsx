import { render, screen } from '@testing-library/react';
import AudioCallCategoryPage from '../../../src/pages/audiocall-category';
import '@testing-library/jest-dom';
import AudioGame from '../../../public/audiogame.svg';

describe('AudioCallPracticePage', () => {
  beforeEach(() => {
    render(<AudioCallCategoryPage />);
  });

  it('renders a singing image', () => {
    const singingImage = render(<AudioGame />);
    expect(singingImage.firstChild).toMatchSnapshot();
  });

  it('renders a audio call heading', () => {
    const audioCallHeading = screen.getByText('Audio-Call');
    expect(audioCallHeading).toBeInTheDocument();
  });

  it('renders a audio call description', () => {
    const audioCallDescription = screen.getByText(
      'The Audio-Call training develops vocabulary and improves listening comprehension.'
    );
    expect(audioCallDescription).toBeInTheDocument();
  });

  it('renders a Choose level text', () => {
    const choseLevelText = screen.getByText('Choose a level:');
    expect(choseLevelText).toBeInTheDocument();
  });

  it('renders audition task label', () => {
    const auditionTaskLabel = screen.getByText('audition task');
    expect(auditionTaskLabel).toBeInTheDocument();
  });

  it('renders a A1 button', () => {
    const button = screen.getByRole('button', { name: /A1/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a A2 button', () => {
    const button = screen.getByRole('button', { name: /A2/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a B1 button', () => {
    const button = screen.getByRole('button', { name: /B1/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a B2 button', () => {
    const button = screen.getByRole('button', { name: /B2/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a C1 button', () => {
    const button = screen.getByRole('button', { name: /C1/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a C2 button', () => {
    const button = screen.getByRole('button', { name: /C2/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a Get Started button', () => {
    const button = screen.getByRole('button', { name: /Get Started/i });
    expect(button).toBeInTheDocument();
  });
});
