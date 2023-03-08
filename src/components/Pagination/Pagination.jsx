import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPerPage,
  selectTransactions,
} from 'redux/transactions/selectors';
import { setPage } from 'redux/transactions/transactionSlice';
import css from './Pagination.module.css';

export const Pagination = () => {
  const transactions = useSelector(selectTransactions);
  const itemsPerPage = useSelector(selectPerPage);
  const dispatch = useDispatch();

  const pageCount = Math.ceil(transactions.length / itemsPerPage);

  const handlePageClick = e => {
    const newPage = (e.selected * itemsPerPage) % transactions.length;
    dispatch(setPage(newPage));
  };

  return (
    <>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        nextLabel=">"
        previousLabel="<"
        breakLabel="..."
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
        containerClassName={css.pagination}
        pageLinkClassName={css.pageLink}
        nextLinkClassName={css.pageLink}
        previousLinkClassName={css.pageLink}
        breakLinkClassName={css.pageLink}
        activeClassName={css.active}
        disabledClassName={css.disabled}
      />
    </>
  );
};
