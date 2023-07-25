import { render, screen } from '@testing-library/react';
import OtherSections from '../../../../src/components/Home/OtherSections';
import '@testing-library/jest-dom';
import { indexMockData } from '../../../../mockData/IndexMockData';

describe('OtherSections', () => {
  beforeEach(() => {
    render(<OtherSections data={indexMockData} />);
  });
  // Tests for other sections
  it('renders a language section heading', () => {
    const languageHeading = screen.getByText('Learn a language in a playful way');
    expect(languageHeading).toBeInTheDocument();
  });

  it('renders a language section description', () => {
    const languageDescription = screen.getByText('Make learning words more fun with mini-games');
    expect(languageDescription).toBeInTheDocument();
  });

  it('renders a vocabulary section heading', () => {
    const vocabularyHeading = screen.getByText('Increase your vocabulary');
    expect(vocabularyHeading).toBeInTheDocument();
  });

  it('renders a vocabulary section description', () => {
    const vocabularyDescription = screen.getByText(
      'Traditional and new effective approaches to word study'
    );
    expect(vocabularyDescription).toBeInTheDocument();
  });

  it('renders a progress section heading', () => {
    const progressHeading = screen.getByText('Watch your progress every day');
    expect(progressHeading).toBeInTheDocument();
  });

  it('renders a progress section description', () => {
    const progressDescription = screen.getByText(
      'Save statistics on your achievements, words learned, and mistakes'
    );
    expect(progressDescription).toBeInTheDocument();
  });

  it('renders a sprint div button', () => {
    const sprintButton = screen.getByText('Sprint →');
    expect(sprintButton).toBeInTheDocument();
  });

  it('renders a video call div button', () => {
    const videoCallButton = screen.getByText('Audio-call →');
    expect(videoCallButton).toBeInTheDocument();
  });

  it('renders a Textbook button', () => {
    const button = screen.getByRole('button', { name: /Textbook →/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a statistics button', () => {
    const button = screen.getByRole('button', { name: /Statistics →/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a language image', () => {
    const languageImg = screen.getByRole('img', { name: /Language/i });
    expect(languageImg).toBeInTheDocument();
  });

  it('renders a vocabulary image', () => {
    const vocabularyImg = screen.getByRole('img', { name: /Vocabulary/i });
    expect(vocabularyImg).toBeInTheDocument();
  });

  it('renders a progress image', () => {
    const progressImg = screen.getByRole('img', { name: /Statistics/i });
    expect(progressImg).toBeInTheDocument();
  });

  it('renders a sprint image', () => {
    const sprintImg = screen.getByRole('img', { name: /sprint/i });
    expect(sprintImg).toBeInTheDocument();
  });

  it('renders a video call image', () => {
    const videoCallImg = screen.getByRole('img', { name: /video call/i });
    expect(videoCallImg).toBeInTheDocument();
  });
});
