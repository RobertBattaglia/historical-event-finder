import React from 'react';
import ReactPaginate from 'react-paginate';

const Paginate = props => {
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
        onPageChange={() => {
          console.log('page clicked');
        }}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </React.Fragment>
  );
};

export default Paginate;
