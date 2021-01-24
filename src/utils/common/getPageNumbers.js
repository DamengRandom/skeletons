export const getPageNumbers = (items, itemsPerPage) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};
