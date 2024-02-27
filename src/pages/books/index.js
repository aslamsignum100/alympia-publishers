import React, { useEffect, useState } from 'react';
import '../books/books.css';
import BreadCrumb from '../../components/breadcrumb';
import BooksCard from '../../components/bookscard';
import { Link } from 'react-router-dom';
import fetchBooks from '../../services/apiService'; 
import SpinnerLoader from '../../components/spinner';

const BooksPage = () => {
  const [books, setBooks] = useState();
 const [spinner, setSpinner] = useState(true)

  useEffect(() => {
    const loadBooks = async () => {
      const books = await fetchBooks();
      setBooks(books);
      setSpinner(false)
    }
    loadBooks();
  }, []);

  const handleGenreClick = async (genre) => {
    try {
      const bookByGenre = await fetchBooks(genre);
      setBooks(bookByGenre);
      setSpinner(false)
    } catch (error) {
      console.error("Error filtering books by genre:", error);
    }
  }

  return (
    <div className='books__page__wrapper'>
      <BreadCrumb heading="Books" />
      <div className='empty-space'></div>
      <section className='books__type__section'>
        <div className='container'>
          <div className='books__view__wrapper d-flex'>
            <div className='__type__links'>
              <div className='links__content'>
                <ul className='d-flex d-lg-block overflow-auto py-2 py-md-0 lists-unstyled mb-0'>
                  <li className='mb-0 mb-lg-3 mr-3 mr-lg-0'>
                    <Link to="#" className="text-nowrap" data-genre="Fiction" onClick={() => handleGenreClick("Fiction")}>Fiction</Link>
                  </li>
                  <li className='mb-0 mb-lg-3 mr-3 mr-lg-0'>
                    <Link to="#" className="text-nowrap" data-genre="Mystery" onClick={() => handleGenreClick("Mystery")}>Mystery</Link>
                  </li>
                  <li className='mb-0 mb-lg-3 mr-3 mr-lg-0'>
                    <Link to="#" className="text-nowrap" data-genre="Children's Literature" onClick={() => handleGenreClick("Children's Literature")}>Children's</Link>
                  </li>
                  <li className='text-nowrap'>
                    <Link to="#" className="text-nowrap" data-genre="Young Adult" onClick={() => handleGenreClick("Young Adult")}>Young Adult</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='books__main__content'>
              <div className='books__page__card d-flex flex-wrap'>
                {
                  spinner ? (
                   <SpinnerLoader/>
                  ):
                  (
                    books && books.map((book) => (
                      <BooksCard data={book} key={book.id} />
                    ))
                  )
                }
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BooksPage;
