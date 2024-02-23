import React from 'react'
import '../topbarheader/topbar.css'

const TopBarHeader = () => {
  return (
    <div className="top__header">
      <div className="container">
         <div className="d-flex align-items-center justify-content-center ">
           <ul className='list-inline list-unstyled m-0 d-flex '>
             <li className="list-inline-item">London .</li>
             <li className="list-inline-item">New York .</li>
             <li className="list-inline-item">Dubai .</li>
             <li className="list-inline-item">Mumbai</li>
           </ul>
         </div>
      </div>
    </div>
  )
}

export default TopBarHeader
