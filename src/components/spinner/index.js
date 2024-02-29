import React from 'react'
import '../spinner/spinner.css'

const SpinnerLoader = () => {
    return (
       <div className='spinner__wrapper'>
         <div class="d-flex h-100 align-items-center justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
       </div>
    )
}

export default SpinnerLoader
