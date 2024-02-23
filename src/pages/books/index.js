import React from 'react'
import '../books/books.css'
import BreadCrumb from '../../components/breadcrumb'
import BooksCard from '../../components/bookscard'
import booksData from '../../data/booksData'
import { Link } from 'react-router-dom'

const BooksPage = () => {

  return (
    <div className='books__page__wrapper'>
      <BreadCrumb heading="Books" />
      <div className='empty-space'></div>
      <section className='books__type__section'>
        <div className='container'>
          <div className='books__view__wrapper d-flex'>
            <div className='__type__links'>
              <div className='links__content'>
                <ul className='lists-unstyled mb-0'>
                  <li className='mb-3'><Link>Fiction</Link></li>
                  <li className='mb-3'><Link>Non Fiction</Link></li>
                  <li className='mb-3'><Link>Children's</Link></li>
                  <li className=''><Link>Coming Soon</Link></li>
                </ul>
              </div>
            </div>
            <div className='books__main__content'>
              <div className='books__page__card d-flex flex-wrap'>
                {
                  booksData.booksType && booksData.booksType.map((books) => {
                    return (
                      <BooksCard data={books} key={books.id} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BooksPage
