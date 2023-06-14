import { render, screen } from '@testing-library/react';
import Home from '../../../src/pages/index';
import '@testing-library/jest-dom';
import exp from 'constants';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });
  // Tests for Hero section
  it('renders a hero subheading', () => {
    const subheading = screen.getByText('AI-powered chatting PLATFORM');
    expect(subheading).toBeInTheDocument();
  });

  it('renders a hero heading', () => {
    const heroHeading = screen.getByText('Learning and teaching online, made easy.');
    expect(heroHeading).toBeInTheDocument();
  });

  it('renders a hero content', () => {
    const content = screen.getByText(
      'Practice your English and learn new things with the platform.'
    );
    expect(content).toBeInTheDocument();
  });

  it('renders a left number', () => {
    const numberLeft = screen.getByText('600');
    expect(numberLeft).toBeInTheDocument();
  });

  it('renders a right number', () => {
    const numberRight = screen.getByText('2');
    expect(numberRight).toBeInTheDocument();
  });
  it('renders two plus letter', () => {
    const plus = screen.getAllByText('+');
    expect(plus[0]).toBeInTheDocument();
    expect(plus[1]).toBeInTheDocument();
  });

  it('renders two texts', () => {
    const textLeft = screen.getByText('Popular words');
    const textRight = screen.getByText('Mini-games');
    expect(textLeft).toBeInTheDocument();
    expect(textRight).toBeInTheDocument();
  });

  it('renders a hero button', () => {
    const button = screen.getByRole('button', { name: /About platform/i });
    expect(button).toBeInTheDocument();
  });

  it('renders a lightening icon', () => {
    const lighteningIcon = screen.getByRole('img', { name: /heroLightening icon/i });
    expect(lighteningIcon).toBeInTheDocument();
    expect(lighteningIcon).toHaveAttribute('src', '/heroLightening.svg');
  });

  it('renders a game icon', () => {
    const gameIcon = screen.getByRole('img', { name: /heroGame icon/i });
    expect(gameIcon).toBeInTheDocument();
    expect(gameIcon).toHaveAttribute('src', '/heroGame.svg');
  });

  it('renders a boy image', () => {
    const boyImg = screen.getByRole('img', { name: /heroBoy image/i });
    expect(boyImg).toBeInTheDocument();
    expect(boyImg).toHaveAttribute('src', '/heroBoy.svg');
  });
});
