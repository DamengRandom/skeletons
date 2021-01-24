import React, { useState } from "react";

import { getPageNumbers } from "../../utils/common/getPageNumbers";
import { mockItems } from "../../constants/mocks";
import PaginationItems from "../organisms/PaginationItems";
import PaginationPageNumbers from "../organisms/PaginationPageNumbers";

export default function Pagination() {
  const [pageSettings, setPageSettings] = useState({
    items: mockItems,
    currentPage: 1,
    itemsPerPage: 3
  });

  const handlePageChange = event => {
    setPageSettings({
      ...pageSettings,
      currentPage: Number(event.target.id)
    });
  };

  const lastPage = pageSettings.currentPage * pageSettings.itemsPerPage;
  const firstPage = lastPage - pageSettings.itemsPerPage;
  const currentItems = pageSettings.items.slice(firstPage, lastPage);

  const pageNumbers = getPageNumbers(
    pageSettings.items,
    pageSettings.itemsPerPage
  );

  const paginationPageNumbersProps = {
    pageNumbers,
    handlePageChange
  };

  return (
    <div>
      <PaginationItems currentItems={currentItems} />
      <PaginationPageNumbers {...paginationPageNumbersProps} />
    </div>
  );
}
