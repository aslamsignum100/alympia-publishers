import React from 'react'
import '../bookscard/bookscard.css'

const BooksCard = ({ data }) => {
    return (
        <div className="book__card">
            <img src={data.img} alt='new release books' className='img-fluid' />

            {
                data.title && <div className='card__content mt-3'>
                    <p className='font-700 mb-1'>{data.title}</p>
                    <span>{data.autherName}</span>
                </div>
            }

        </div>
    )
}

export default BooksCard
