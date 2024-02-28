import React from 'react'
import noDataImg from '../../assets/images/nodata-img.jpg'
import BreadCrumb from '../../components/breadcrumb'

const AuthorsPage = () => {
  return (
    <div className='authors__page__wrapper'>
      <BreadCrumb heading="Authors" />
      <section className='authors__section'>
        <div className='container'>
          <div className='mt-5 d-flex flex-column align-items-center justify-content-center'>
            <img src={noDataImg} alt='no data' className='img-fluid' />
            <p className='font-700'>No data found</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AuthorsPage
