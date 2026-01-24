const Pagination = ({ currentPage, onPageChange, totalItems, limit }) => {
  const totalPages = Math.ceil(totalItems / limit);
  return (
    <div className="flex justify-center mt-4">
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} className="p-2 border">Prev</button>
      <span className="p-2">Page {currentPage} of {totalPages}</span>
      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} className="p-2 border">Next</button>
    </div>
  );
};

export default Pagination;