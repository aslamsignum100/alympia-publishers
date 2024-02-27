import React from 'react'
import '../contactus/contact.css'
import img from '../../assets/images/home/infographic1.png'
import BreadCrumb from '../../components/breadcrumb'
import contactDataLists from '../../data/contactUsData'

const ContactUsPage = () => {
  return (
    <div className='contactus__page__wrapper'>
      <BreadCrumb heading="Contact Us" />
      <section className="contact___section">
        {
          contactDataLists && contactDataLists.map((data) => {
            return (
              <>
                <div className="wrapper__contact__branch_row mb-3">
                  <div className="container">
                    <div className="row ">
                      <div className="col-md-4 mb-4 mb-md-0">
                        <div className='contact__col'>
                          <h4 class="font-700">{data.city}</h4>
                          <img src={data.img} alt='dubai' className='img-fluid' />
                        </div>
                      </div>
                      <div className="col-md-4 mb-4 mb-md-0">
                        <div className='contact__col'>
                          <h3 class="subheading font-700 mb-3 ">{data.mainheading.heading}</h3>
                          <p className='font-size-28 mb-0 mb-md-2' dangerouslySetInnerHTML={{ __html: data.mainheading.caption }}>
                            {/* {data.mainheading.caption} */}
                          </p>
                          <div className='enguaries mt-0 mt-md-5 pt-3'>
                            <h5 className='font-size-28 font-700'>{data.enquaries.heading}</h5>
                            <p className='font-size-28'>{data.enquaries.caption}</p>
                          </div>
                          <div className='submission mt-0 mt-md-5 pt-3'>
                            <h5 className='font-size-28 font-700'>{data.submission.heading}</h5>
                            <p className='font-size-28 mb-0 mb-md-2'>{data.submission.caption}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className='contact__col'>
                          <div className='speak__to__to'>
                            <h5 className='font-size-28 font-700'>{data.speakus.heading}</h5>
                            <p className='font-size-28 mb-0 mb-md-2'>
                             {data.speakus.caption}
                            </p>
                          </div>
                          <div className='speak__to__to mt-2 mt-md-4'>
                            <h5 className='font-size-28 font-700'>{data.businessours.heading}</h5>
                            <p className='font-size-28 mb-0'>
                             {data.businessours.caption}
                            </p>
                            <p className='font-size-28 mb-0'>
                             {data.businessours.timing}
                            </p>
                            <p className='font-size-28 mb-0'>
                             {data.businessours.fridayTiming}
                            </p>
                          </div>
                          <div className='holidays__captionmt-2 mt-md-4'>
                            <p className='font-size-28 mb-0 mb-md-2'>
                              {data.businessours.holidaycaption}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </section>
    </div>
  )
}

export default ContactUsPage
