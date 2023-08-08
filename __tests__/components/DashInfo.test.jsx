import { render, screen, fireEvent } from '@testing-library/react';
import { SummaryDash, LikeDash, LearningDash } from '../../src/components/DashInfo';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';

describe('render PointsDash component', () => {
  beforeEach(() => {
    render(<SummaryDash progressValue={240} />);
  });

  it('render retrieved Text', () => {
    const retrievedText = screen.getByText('retrieved');
    expect(retrievedText).toBeInTheDocument();
  });

  it('render progressValue heading', () => {
    const progressValueHeading = screen.getByText(240);
    expect(progressValueHeading).toBeInTheDocument();
  });

  it('render progressValue unit', () => {
    const progressValueUnit = screen.getByText('points');
    expect(progressValueUnit).toBeInTheDocument();
  });
});

describe('render WordsDash component', () => {
  beforeEach(() => {
    render(<SummaryDash progressValue={30} maxValue={40} />);
  });

  it('render maxValue Text', () => {
    const maxValueText = screen.getByText('40/');
    expect(maxValueText).toBeInTheDocument();
  });

  it('render progressValue heading', () => {
    const progressValueHeading = screen.getByText(30);
    expect(progressValueHeading).toBeInTheDocument();
  });

  it('render progressValue unit', () => {
    const progressValueUnit = screen.getByText('Words');
    expect(progressValueUnit).toBeInTheDocument();
  });
});

describe('render LikeDash component', () => {
  beforeEach(() => {
    render(<LikeDash progressValue={4} />);
  });

  it('render remainsText', () => {
    const remainsText = screen.getByText('remains');
    expect(remainsText).toBeInTheDocument();
  });

  it('render loveText', () => {
    const loveText = screen.getByText('♥');
    expect(loveText).toBeInTheDocument();
  });

  it('render livesText', () => {
    const livesText = screen.getByText('lives');
    expect(livesText).toBeInTheDocument();
  });

  it('render progressValueText', () => {
    const progressValueText = screen.getByText(4);
    expect(progressValueText).toBeInTheDocument();
  });
});

describe('render LearningDash component', () => {
  beforeEach(() => {
    render(<LearningDash />);
  });

  it('render x2 heading and multiplier description', () => {
    const x2Heading = screen.getByText('x2');
    expect(x2Heading).toBeInTheDocument();

    const multiplierDescription = screen.getByText('multiplier');
    expect(multiplierDescription).toBeInTheDocument();
  });

  it('render 30 heading and points description', () => {
    const thirtyHeading = screen.getByText('30');
    expect(thirtyHeading).toBeInTheDocument();

    const pointsDescription = screen.getByText('points');
    expect(pointsDescription).toBeInTheDocument();
  });

  it('render negative heading and perdre translation', () => {
    const negativeHeading = screen.getByText('negative');
    expect(negativeHeading).toBeInTheDocument();

    const perdreTranslation = screen.getByText('perdre');
    expect(perdreTranslation).toBeInTheDocument();
  });

  it('renders a star rating icon', () => {
    const starRatingIcon = screen.getByRole('img', { name: /stars/i });
    expect(starRatingIcon).toBeInTheDocument();
  });
});

describe('render right and wrong button router in LearningDash component to push and redirect to the other page', () => {
  it('should call router.push when button is clicked', () => {
    // Mock the router.push function
    const pushMock = jest.fn();
    useRouter.mockReturnValue({
      push: pushMock,
    });

    const { getByText } = render(<LearningDash />);

    // Find the button and click it
    const rightButton = getByText('Right');
    fireEvent.click(rightButton);

    const wrongButton = getByText('Wrong');
    fireEvent.click(wrongButton);

    // Check if the mock function was called and log its calls
    console.log(pushMock.mock.calls);

    // Assert that router.push was called with the correct route
    expect(pushMock).toHaveBeenCalledWith('/sprint-summary');
  });
});
