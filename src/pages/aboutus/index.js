import React from 'react'
import '../aboutus/about.css'
import '../../components/talescard/talescard.css'
import BreadCrumb from '../../components/breadcrumb'
import dummyImg from "../../assets/images/about/dummy-image.png"
import imgRamadanReads from '../../assets/images/home/ramadan-reads.png'
import imgSarahSmith from '../../assets/images/home/sarah.png'
import aboutUsContentData from '../../data/aboutUsContentData'
import TalesCard from '../../components/talescard'


const AboutUsPage = () => {
  return (
    <div>
      <BreadCrumb heading="About Us" />
      <div className="empty-space"></div>
      <section className='__welcome__section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <h3 className='subheading font-700 mb-3 '>Welcome to Olympia Publishers</h3>
              <p className='paragraph mb-0 '>
                Dubai is our next stop to expand our extensive<br /> knowledge and service of the publishing world.<br /> Publishing with us guarantees you a tailored<br /> service and a five star experience from start to<br /> finish. With an increased number of UAE authors,<br /> we have decided to create this bespoke platform <br />to promote our authors and give them the highest<br /> chance of success.
              </p>
            </div>
            <div className='col-md-6'>
              <img src={dummyImg} alt="dumy" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>

      <div className="empty-space"></div>
      <section className='container __bg_black py-5'>
        <div className='content__wrapper text-center py-5'>
          <h4 className='font-700 font-size-60 text-white'>Lorum Ipsum Dipsum <br /> Text to go here</h4>
          <p></p>
        </div>
      </section>

      <section className='container'>
        {
          aboutUsContentData.dataContent && aboutUsContentData.dataContent.map((data, index) => {
            return (
              <>
                <div className="empty-space"></div>
                <div className={`row ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} key={data.id}>
                  <div className='col-md-6'>
                    <img src={data.img} alt="dummy" className='img-fluid' />
                  </div>
                  <div className='col-md-6'>
                    <h3 className='subheading font-700 mb-3'>{data.heading}</h3>
                    <p className='paragraph mb-0'>
                      {data.content}
                    </p>
                  </div>
                </div>
              </>
            )
          })
        }

      </section>
      <div className="empty-space"></div>
      <section className="container">
        <div className="infographic__section py-5 text-center ">
          <h3 className='subheading font-700 mb-3 text-white'>Start your publishing journey with us</h3>
          <p className='paragraph text-white'>
            Whether you want to share your story with the world or leave a legacy for<br /> generations to come, our exceptional team will take care of your book from the<br /> beginning with unparalleled publishing service. We work tirelessly to deliver<br />
            the moment you've been waiting for - holding your published book in your hands.
          </p>
          <div className='btnArea mt-5'>
            <button className="text-uppercase secondaryBtn customBtn">Submit Online</button>
          </div>
        </div>
      </section>


      <div className="empty-space"></div>
      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <div className='ramada__reads position-relative'>
              <figcaption>
                <img src={imgRamadanReads} alt='ramada reads' className='img-fluid' />
              </figcaption>
              <TalesCard heading="PUBLISHING PROCESS" btnText="Read More"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className='ramada__reads position-relative'>
              <figcaption>
                <img src={imgSarahSmith} alt='ramada reads' className='img-fluid' />
              </figcaption>
               <TalesCard heading="5 STAR REVIEWS" btnText="Read More"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage
