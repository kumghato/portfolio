import React from 'react'
import computer from '../assets/images/computer.png'

function Home() {
    return (
        <>
            <div className='container_home pt-5 text-start d-flex justify-content-center' id='header'>
                <div className='row d-flex justify-content-evenly '>
                    <div className='col-lg-6 col-md-6 col-sm-12 intro'>
                        <h1 className='fs-1 mb-3'>Hello, there</h1>
                        <h1 className='fs-1'>I'm</h1>
                        <h1 className='name fw-bold my-3'>Kumghato K Khala</h1>
                        <h1 className='mb-5 fs-2'>Fullstack Web Developer</h1>
                        <a href='https://drive.google.com/file/d/1va2OZlEurPsi9XuwWKq8wb6AB_b5QfEL/view?usp=drive_link' target='_blank' className='btn_custom px-5 py-2 text-center d-flex align-items-center justify-content-center'>Resume</a>

                    </div>
                    <div className='col-6 col-md-6 col-sm-12 d-flex justify-content-center'>
                        <img src={computer} alt="computer " className='image' />
                    </div>
                </div>

            </div >

        </>
    )
}

export default Home