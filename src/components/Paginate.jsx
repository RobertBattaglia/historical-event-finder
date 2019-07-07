import React from 'react';
import ReactPaginate from 'react-paginate';

const Paginate = ({ handlePage, pageCount }) => {
  const handleChange = ({ selected }) => {
    handlePage(selected + 1);
  };

  return (
    <React.Fragment>
      <ReactPaginate
        initialPage={0}
        previousLabel={String.fromCharCode(8672)}
        nextLabel={String.fromCharCode(8674)}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handleChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </React.Fragment>
  );
};

export default Paginate;
