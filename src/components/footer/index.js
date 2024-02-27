import React from 'react'
import '../footer/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="empty-space"></div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <h4 class="font-size-20 mb-2 mb-lg-4 font-600">OLYMPIA PUBLISHERS</h4>
              <ul class="mb-0 list-unstyled">
                <li class="mb-2 mb-lg-4"><Link>ABOUT US</Link></li>
                <li class="mb-2 mb-lg-4"><Link>AUTHORS</Link></li>
                <li class="mb-2 mb-lg-4"><Link>CONTACT US </Link></li>
                <li class=""><Link>FAQs </Link></li>
              </ul>
            </div>
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <h4 class="font-size-20 mb-2 mb-lg-4 font-600">ACCEPTING SUBMISSIONS</h4>
              <ul class="mb-0 list-unstyled">
                <li class="mb-2 mb-lg-4"><Link>SUBMISSIONS</Link></li>
                <li class="mb-2 mb-lg-4"><Link>OUR PUBLISHING PROCESS</Link></li>
                <li class=""><Link>SUBMIT ONLINE</Link></li>
              </ul>
            </div>
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <h4 class="font-size-20 mb-2 mb-lg-4 font-600">OUR LOCATIONS</h4>
              <ul class="mb-0 list-unstyled">
                <li class="mb-2 mb-lg-4"><Link>LONDON</Link></li>
                <li class="mb-2 mb-lg-4"><Link>NEW YORK</Link></li>
                <li class="mb-2 mb-lg-4"><Link>DUBAI</Link></li>
                <li class=""><Link>MUMBAI</Link></li>
              </ul>
            </div>
            <div class="col-md-6 col-lg-3 ">
              <h4 class="font-size-20 mb-2 mb-lg-4 font-600">FOLLOW OLYMPIA PUBLISHERS</h4>
              <h4 class="font-size-20 mb-2 mb-lg-4 font-600">FOLLOW BUMBLEBEE BOOKS</h4>
            </div>
          </div>
          <div className="empty-space"></div>
          <div className="row">
            <div className="col-md-12 bottomFooter">
              <Link>POLICIES</Link> |   <Link>T&C</Link>
              <p className='mt-3 mb-0'>
                © Ashwell Publishing Ltd.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
