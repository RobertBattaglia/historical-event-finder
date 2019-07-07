import React from 'react';
import ReactPaginate from 'react-paginate';

const Paginate = props => {
  const handleChange = ({ selected }) => {
    props.handlePage(selected + 1);
  };

  return (
    <React.Fragment>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handleChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </React.Fragment>
  );
};

export default Paginate;
