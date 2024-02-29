import React from "react";
import '../pagination/pagination.css'
import { usePagination } from "../../customHooks/usePagination";
import BooksCard from "../bookscard";
const Pages = ({ data }) => {
    const [
        totalPages,
        startPageIndex,
        endPageIndex,
        currentPageIndex,
        displayPage,
        isFirstPage,
        isLastPage,
    ] = usePagination(9, data ? data.length : 0);

    return (
        <>
            {/* <div className='books__page__card d-flex flex-wrap'>
                {
                    data.slice(startPageIndex, endPageIndex + 1).map((book) => {
                        return (
                            <BooksCard key={book.id} data={book} />
                        )
                    })
                }
            </div> */}
            <div className="pagination__wrapper py-3 px-4 mt-5">
                <div className="Page navigation d-flex align-items-center justify-content-between">
                    <ul className="pagination m-0">
                        {/* <li className={`page-item ${isFirstPage ? 'disabled' : ''}`}>
                            <span className="page-link" onClick={() => displayPage(currentPageIndex - 1)}>Previous</span>
                        </li> */}
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index} className={`page-item mr-2 ${index === currentPageIndex ? 'active' : ''}`}>
                                <span className="page-link" onClick={() => displayPage(index)}>{index + 1}</span>
                            </li>
                        ))}
                        {/* <li className={`page-item ${isLastPage ? 'disabled' : ''}`}>
                            <span className="page-link" onClick={() => displayPage(currentPageIndex + 1)}>Next</span>
                        </li> */}
                    </ul>
                    <div className="view__all__">
                        <span className="page-link bottomLine viewAllBtnPagination p-0" onClick={() => displayPage(currentPageIndex + 1)}>View All</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pages;