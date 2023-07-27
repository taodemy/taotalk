import { render, screen } from '@testing-library/react';
import { SummaryFrame, TitleList } from '../../../src/components/Shared/SummaryFrame';
import '@testing-library/jest-dom';

describe('render PointsDash component', () => {
  beforeEach(() => {
    render(<SummaryFrame summaryHeader="Your Sprint" />);
  });

  it('renders a books image', () => {
    const booksImg = screen.getByRole('img', { name: /books/i });
    expect(booksImg).toBeInTheDocument();
  });

  it('renders a summary Frame comment', () => {
    const summaryComment = screen.getByText('You did pretty good!');
    expect(summaryComment).toBeInTheDocument();
  });

  it('renders a summary header', () => {
    const summaryHeader = screen.getByText('Your Sprint');
    expect(summaryHeader).toBeInTheDocument();
  });

  it('renders a refresh image', () => {
    const refreshImg = screen.getByRole('img', { name: /refresh/i });
    expect(refreshImg).toBeInTheDocument();
  });

  it('renders a playAgainText', () => {
    const playAgainText = screen.getByText('Play it again');
    expect(playAgainText).toBeInTheDocument();
  });

  it('renders a textbook button', () => {
    const button = screen.getByRole('button', { name: /Go to textbook/i });
    expect(button).toBeInTheDocument();
  });
});

describe('render PointsDash TitleList component', () => {
  it('renders a I know Title and Label', () => {
    render(<TitleList titleName="I know" labelName="15 words" />);
    const iKnowTitle = screen.getByText('I know');
    expect(iKnowTitle).toBeInTheDocument();

    const fifteenWordsLabel = screen.getByText('15 words');
    expect(fifteenWordsLabel).toBeInTheDocument();
  });

  it('renders a I dont know Title and Label', () => {
    render(<TitleList titleName="I don't know" labelName="15 words" />);
    const iDontKnowTitle = screen.getByText("I don't know");
    expect(iDontKnowTitle).toBeInTheDocument();

    const fifteenWordsLabel = screen.getByText('15 words');
    expect(fifteenWordsLabel).toBeInTheDocument();
  });
});
