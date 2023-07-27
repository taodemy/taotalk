import { render, screen } from '@testing-library/react';
import DirectionGuide from '../../../src/components/Shared/DirectionGuide';
import '@testing-library/jest-dom';

describe('render DirectionGuide component', () => {
  beforeEach(() => {
    render(<DirectionGuide guideDetails="← →" />);
  });

  it('render direction guide', () => {
    const guideText = screen.getByText('← →');
    expect(guideText).toBeInTheDocument();
  });

  it('render * star', () => {
    const starText = screen.getByText('*');
    expect(starText).toBeInTheDocument();
  });

  it('render left guide text', () => {
    const leftGuideText = screen.getByText('You can also use the');
    expect(leftGuideText).toBeInTheDocument();
  });

  it('render right guide text', () => {
    const rightGuideText = screen.getByText('keys on the keyboard');
    expect(rightGuideText).toBeInTheDocument();
  });
});
