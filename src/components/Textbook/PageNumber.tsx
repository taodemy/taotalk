import React from 'react';
import Button from '../Shared/Buttons';
import Styles from './textbook.module.scss';
interface PageNumberProps {
  totalWords: number;
  wordsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PageNumber = ({ totalWords, wordsPerPage, currentPage, onPageChange }: PageNumberProps) => {
  const totalPages = Math.ceil(totalWords / wordsPerPage);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };
  return (
    <div className={Styles.pageNumber}>
      {currentPage > 1 && (
        <Button
          outline={true}
          color="cyan"
          label="←"
          size="round"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
      )}
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          outline={currentPage === index + 1 ? false : true}
          color={currentPage === index + 1 ? 'cyanDark' : 'cyan'}
          key={index}
          onClick={() => handlePageChange(index + 1)}
          label={(index + 1).toString()}
          size="round"
        />
      ))}
      {currentPage < totalPages && (
        <Button
          outline={true}
          color="cyan"
          label="→"
          size="round"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      )}
    </div>
  );
};

export default PageNumber;
