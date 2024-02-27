import React from 'react'
import "../home/home.css"
import '../../components/talescard/talescard.css'
import Hero from '../../components/hero'
import imgRamadanReads from '../../assets/images/home/ramadan-reads.png'
import imgSarahSmith from '../../assets/images/home/sarah.png'
import infographic1 from '../../assets/images/home/infographic1.png'
import infographic2 from '../../assets/images/home/infographic2.png'
import lineImg from '../../assets/images/home/line-img.png'
import emiratePublishersImg from '../../assets/images/home/emirate-publishers.png'
import { Link } from 'react-router-dom'
import booksData from '../../data/booksData'
import BooksCard from '../../components/bookscard'
import TalesCard from '../../components/talescard'

const HomePage = () => {
  return (
    <div className="homepage__contents">
      <Hero />
      <div className="empty-space"></div>
      <section className="container welcome__note">
        <h3 className='subheading font-700 mb-3 text-center'>Welcome to Olympia Publishers</h3>
        <p className='paragraph mb-0 text-center'>
          Founded in London, Olympia Publishers have become a leading hybrid publisher,<br/> Olympia Publishers UAE is based in Dubai, hub for our authors in the Middle East<br/> giving them the highest chance of success in the ever expanding publishing<br/> industry. Publishing with us guarantees you a tailored service and a five star<br/> experience from start to finish.  We believe in telling the best stories and in<br/> ensuring that these stories reach a wide readership.
        </p>
        <div className="empty-space"></div>
        <div className="row">
          <div className="col-md-6">
            <div className='ramada__reads position-relative'>
              <figcaption>
                <img src={imgRamadanReads} alt='ramada reads' className='img-fluid' />
              </figcaption>
              <TalesCard heading="RAMADAN READS" link="books" btnText="SEE BOOKS"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className='ramada__reads position-relative'>
              <figcaption>
                <img src={imgSarahSmith} alt='ramada reads' className='img-fluid' />
              </figcaption>
              <TalesCard heading="SARAH SMITH" link="authors" btnText="SEE AUTHOR"/>
            </div>
          </div>
        </div>
      </section>
      <div className="empty-space"></div>
      <section className="container">
        <h3 className="heading text-center font-700 mb-3 mb-md-4 mb-lg-5">NEW RELEASES</h3>
        <div className="d-flex flex-wrap justify-content-center new__release__books bookCard__wrapper">
          {
            booksData.newReleaseBooks && booksData.newReleaseBooks.map((books) => {
              return (
                <BooksCard data={books} key={books.id} />
              )
            })
          }
        </div>
        <div className='text-center mt-4'>
          <Link to="/books" className="text-uppercase bottomLine font-700 seeBookLink">See Books</Link>
        </div>
      </section>

      <div className="empty-space"></div>
      <section className="container">
        <h3 className="heading text-center font-700 mb-3 mb-md-4 mb-lg-5">BOOKS FOR YOUNG READERS</h3>
        <div className="d-flex flex-wrap justify-content-center new__release__books bookCard__wrapper">
          {
            booksData.yangReadersBooks && booksData.yangReadersBooks.map((books) => {
              return (
                <BooksCard data={books} key={books.id} />
              )
            })
          }
        </div>
        <div className='text-center mt-4'>
          <Link to="/books" className="text-uppercase bottomLine font-700 seeBookLink">See Books</Link>
        </div>
      </section>

      <div className="empty-space"></div>
      <section className="container">
        <div className=" px-3 py-5">
          <h3 className="text-center font-700 font-size-36  py-5">SUBMIT ONLINE INFOGRAPHIC TO GO HERE</h3>
        </div>
        <div className="infogrpahic__img text-center">
          <img src={infographic1} className='img-fluid' alt="info grpahic" />
          <img src={infographic2} className='img-fluid' alt="info grpahic" />
          <img src={lineImg} className='img-fluid' alt="info grpahic" />
        </div>
      </section>

      <div className="empty-space"></div>
      <section className="container text-center">
        <h3 className="heading font-700 mb-2">START YOUR PUBLISHING JOURNEY WITH US</h3>
        <p className='font-size-20'>
          Premium experience and rewarding publishing journey, lorum ipsum dipsum
        </p>
        <div className="emirate__publishers mt-0 mt-md-5 pt-5">
          <img src={emiratePublishersImg} className='img-fluid' alt="info grpahic" />
        </div>
      </section>
    </div>
  )
}

export default HomePage
