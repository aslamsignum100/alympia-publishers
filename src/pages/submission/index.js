import React from 'react'
import '../submission/submission.css'
import BreadCrumb from '../../components/breadcrumb'
import { Link } from 'react-router-dom'
import iconImg1 from "../../assets/images/review.png"
import iconImg2 from "../../assets/images/handshake.png"

const SubmissionPage = () => {
    return (
        <div className='submission__page__wrapper'>
            <BreadCrumb heading="Submissions" />
            <div className="empty-space"></div>
            <div className='container'>
                <section className='submission__procedure inner__container__space'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='procedures__'>
                                <h3 class="subheading font-700 mb-3 ">Submitting your work</h3>
                                <p className='paragraph mb-2 mb-md-3 mb-lg-4'>
                                    We consider submissions from a wide range of genres, both fiction, non-fiction and children’s.
                                </p>
                                <p className='paragraph mb-2 mb-md-3 mb-lg-4'>
                                    We <strong>do not</strong> accept academic works, sheet music, joke books or foreign language books.
                                </p>
                                <p className='paragraph mb-2 mb-md-3 mb-lg-4'>
                                    If you haven’t yet finished the work but would like to know if it would be something we are interested in before completing then you are also welcome to send samples of the manuscript to us by email.
                                </p>
                                <p className='paragraph'>
                                    We accept work with or without an agent.
                                </p>
                            </div>

                            <div className='procedures__ mt-2 mt-md-3 mt-lg-5'>
                                <h3 class="subheading font-700 mb-2 mb-md-3 ">Arabic & English</h3>
                                <p className='paragraph mb-4'>
                                    We accept submissions in both Arabic and English language.
                                </p>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='procedures__'>
                                <h3 class="subheading font-700 mb-3 ">Submitting poetry</h3>
                                <p className='paragraph  mb-2 mb-md-3 mb-lg-4'>
                                    We require 5 poems as a sample and then if they pass the initial review, we would request at least 25 to make a collection. The minimum word count is 10,000 words or 20 pages with illustrations.
                                </p>
                            </div>

                            <div className='procedures__ mt-3 mt-md-3 mt-lg-5'>
                                <h3 class="subheading font-700 mb-3 ">Publishing contract</h3>
                                <p className='paragraph  mb-2 mb-md-3 mb-lg-4'>
                                    <span className='color__red'>Hybrid publishing contract</span><br />
                                    This offer is based on a contribution, to be paid by the author, to cover initial production and printing of the work. Marketing costs are incurred by us as your publisher.
                                </p>

                                <p className='paragraph  mb-2 mb-md-3 mb-lg-4'>
                                    <span className='color__red'>Traditional contract</span><br />
                                    This is where no costs are incurred by the author and the whole cost for producing, publishing and marketing the work is covered by us.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='submission__procedure mt-5'>
                    <h3 class="subheading font-700 mb-5 text-center">How to submit your work?</h3>
                    <div className='row'>
                        <div className='col-lg-6 d-flex'>
                            <div className='submit__work__col color__gray'>
                                <h3 class="subheading font-700 mb-3 ">EMAIL</h3>
                                <p className='paragraph mb-4'>
                                    Please include your name and book title in the subject of the email and send us the following:
                                </p>
                                <p className='paragraph mb-4'>
                                    1. A synopsis of the book<br />
                                    2. A covering letter<br />
                                    3. The full manuscript<br />
                                </p>
                                <p className='paragraph mb-4'>
                                    <span className='color__red'>submissions@olympiapublishers.ae</span>
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex'>
                            <div className='submit__work__col color__gray'>
                                <h3 class="subheading font-700 mb-3 ">SUBMIT ONLINE </h3>
                                <p className='paragraph mb-4'>
                                    A quick and secure way to submit to us is by using our online submission form, just click below to begin.
                                </p>
                                <div className='btnArea pt-5'>
                                    <Link to="/submission" className='primaryBtn customBtn text-white'>SUBMIT ONLINE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='submission__procedure mt-5 work__submitted__section'>
                    <h3 class="subheading font-700 text-center mb-5">What happens after work is submitted?</h3>
                    <div className='row m-0'>
                        <div className='col-lg-6 d-flex p-0 color__gray'>
                            <div className='submit__work__col'>
                                <h3 class="subheading font-700 mb-3 ">
                                    <span className='d-flex flex-wrap align-items-center'>
                                        <figcaption>
                                            <img src={iconImg1} alt='editorial review' className='img-fluid mr-4' />
                                        </figcaption>
                                        Submission and<br /> editorial review
                                    </span>
                                </h3>
                                <p className='font-size-20 mb-4'>
                                    You’ve done the hard part... You’ve written your book and submitted it to us. The Submissions Editor reviews your submission to ensure that your manuscript is complete, and that we have all the information we need.
                                </p>
                                <p className='font-size-20 mb-4'>
                                    Our editors then review your work, they are looking for a page-turner; something original and unique. A work with potential to appeal to a wide array of readers. This review process can take up to <strong>6 weeks.</strong>
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 p-0 d-flex color__gray'>
                            <div className='submit__work__col'>
                                <h3 class="subheading font-700 mb-3 ">
                                    <span className='d-flex flex-wrap align-items-center'>
                                        <figcaption>
                                            <img src={iconImg2} alt='editorial review' className='img-fluid  mr-4' />
                                        </figcaption>
                                        Offer of<br /> publication

                                    </span>
                                </h3>
                                <p className='font-size-20 mb-4'>
                                    If our editors like what they read, you will be contacted with an offer of publication. On signing the publishing contract you’ve become part of the Olympia family – Congratulations! This is where it all begins.
                                </p>
                                <p className='font-size-20 mb-4'>
                                    Your manuscript will be handed over to your dedicated production coordinator who will work with you to make your book the best it can possibly be.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SubmissionPage
