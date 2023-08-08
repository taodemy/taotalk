import { render, screen } from '@testing-library/react';
import ScrollRow from '../../../src/components/Shared/ScrollArea/ScrollRow';
import '@testing-library/jest-dom';
import Play from '../../../public/play.svg';

describe('render DirectionGuide component', () => {
  beforeEach(() => {
    render(<ScrollRow itemOne="lone" itemTwo="- solitaire" />);
  });

  it('renders a play image', () => {
    //Play svgr component in play button
    const playImage = render(<Play />);
    expect(playImage.firstChild).toMatchSnapshot();
  });

  it('renders an English Text', () => {
    const englishText = screen.getByText('lone');
    expect(englishText).toBeInTheDocument();
  });

  it('renders an Translation Text', () => {
    const translationText = screen.getByText('- solitaire');
    expect(translationText).toBeInTheDocument();
  });
});
