import React from 'react'

function Footer() {
    return (
        <footer className='bg p-2 d-flex flex-column text-center position-relative footer'>

            <span className='footer_icons align-items-center d-flex justify-content-center p-3'>
                <i class="fa fa-linkedin-square me-3 fs-4" aria-hidden="true"></i>
                <i class="fa fa-github ms-3 fs-4" aria-hidden="true"></i>

            </span>
            <span className='lh-lg'>{new Date().getFullYear()} <span className='fw-bold' style={{ fontFamily: "sans-serif" }}>&copy;</span> | All rights reserved</span>
            <span className='lh-lg'>Designed by Kumghato K Khala</span>
        </footer>
    )
}

export default Footer