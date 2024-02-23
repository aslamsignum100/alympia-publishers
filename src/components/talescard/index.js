import React from 'react'
import { Link } from 'react-router-dom'

const TalesCard = ({ heading, link, btnText }) => {
    return (
        <div className="tales__card position-absolute p-4">
            <h4 className='mb-2 font-700 font-size-28'>{heading}</h4>
            <Link to={link} className="text-uppercase bottomLine font-700 seeBookLink">{btnText}</Link>
        </div>
    )
}

export default TalesCard
