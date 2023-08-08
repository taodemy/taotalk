import { render, screen } from '@testing-library/react';
import AudioCallPracticePage from '../../../src/pages/audiocall-practice';
import '@testing-library/jest-dom';
import Play from '../../../public/play.svg';

describe('AudioCallPracticePage', () => {
  beforeEach(() => {
    render(<AudioCallPracticePage />);
  });
  it('renders a Play Button', () => {
    //play text in play button
    const playText = screen.getByText('Play');
    expect(playText).toBeInTheDocument();
    //Play svgr component in play button
    const playImage = render(<Play />);
    expect(playImage.firstChild).toMatchSnapshot();
  });

  it('renders a five likes image', () => {
    const fiveLikesImage = screen.getByRole('img', { name: /five likes/i });
    expect(fiveLikesImage).toBeInTheDocument();
  });

  it('renders a I dont know button', () => {
    const button = screen.getByRole('button', { name: /I don't know/i });
    expect(button).toBeInTheDocument();
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
});
