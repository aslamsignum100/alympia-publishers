import React from 'react'
import '../breadcrumb/breadcrumb.css'
const BreadCrumb = ({heading}) => {
  return (
    <div className="bread__crumb__wrapper">
      <div className='container'>
        <h4 className='font-700 mb-0'>{heading}</h4>
      </div>
    </div>
  )
}

export default BreadCrumb
