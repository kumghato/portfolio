import React from 'react'
import { TbBrandJavascript } from 'react-icons/tb'
import { TbBrandHtml5 } from 'react-icons/tb'
import { TbBrandCss3 } from 'react-icons/tb'
import { TbBrandBootstrap } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { TbBrandMongodb } from 'react-icons/tb'


function About() {
    return (
        <>
            <div className='about_section'>
                <section>
                    <div className='container_about my-5 form'>
                        <h1 className='headers text-center mb-2'>About me</h1>
                        <p className='font_color lh-lg bio '> Hello, my name is Kumghato K. Khala.
                            I am a passionate full-stack web developer
                            (MERN) and a music producer.
                            I am driven by creativity and innovation,
                            and I enjoy turning my imagination into reality,
                            whether be it in music or web development.
                        </p>
                    </div>
                </section>
                <section>
                    <div className='container_about p-3 my-5 form'>
                        <h1 className='headers text-center mb-5'>Skills Acquired</h1>
                        <div className='d-flex justify-content-evenly text-center skills_icons'>
                            <div>
                                <TbBrandHtml5 className='rounded p-1 icons' />
                                <p className='text-dark lh-lg'>HTML</p>
                            </div>
                            <div>
                                <TbBrandCss3 className='rounded p-1 icons' />
                                <p className='text-dark lh-lg'>CSS</p>
                            </div>
                            <div>
                                <TbBrandJavascript className='rounded p-1 icons' />
                                <p className='text-dark lh-lg'>Javascript</p>
                            </div>
                            <div>
                                <TbBrandBootstrap className='rounded p-1 icons' />
                                <p className='text-dark lh-lg'>Bootstrap</p>
                            </div>
                            <div>
                                <FaReact className='rounded p-2 icons' />
                                <p className='text-dark lh-lg'>React JS</p>
                            </div>
                            <div>
                                <FaNodeJs className='rounded p-2 icons' />
                                <p className='text-dark lh-lg'>Node JS</p>
                            </div>
                            <div>
                                <SiExpress className='rounded p-2 icons' />
                                <p className='text-dark lh-lg'>Express JS</p>
                            </div>
                            <div>
                                <TbBrandMongodb className='rounded p-2 icons' />
                                <p className='text-dark lh-lg'>MongoDB</p>
                            </div>
                        </div>
                        {/* <div className='d-flex justify-content- skills_icons text-danger'>
                           
                            
                           
                           
                         
                          
                          

                        </div> */}
                    </div>
                </section>

            </div>
        </>
    )
}

export default About