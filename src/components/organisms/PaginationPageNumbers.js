import React from "react";
import styled from "styled-components";

const PageNumbersWrapper = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin-left: 0.3em;
    user-select: none;
    cursor: pointer;
  }
`;

export default function PaginationPageNumbers(restProps) {
  const { pageNumbers, handlePageChange } = restProps;
  return (
    <div>
      <PageNumbersWrapper>
        {pageNumbers.map(count => (
          <li
            key={`page-${count}`}
            id={`${count}`}
            onClick={event => handlePageChange(event)}
          >
            {count}
          </li>
        ))}
      </PageNumbersWrapper>
    </div>
  );
}
