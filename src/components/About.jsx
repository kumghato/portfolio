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
                        <div className='d-flex justify-content-evenly skills_icons'>
                            <TbBrandHtml5 className='rounded p-1 icons' />
                            <TbBrandCss3 className='rounded p-1 icons' />
                            <TbBrandJavascript className='rounded p-1 icons' />
                            <TbBrandBootstrap className='rounded p-1 icons' />
                            <FaReact className='rounded p-2 icons' />
                            <FaNodeJs className='rounded p-2 icons' />
                            <SiExpress className='rounded p-2 icons' />
                            <TbBrandMongodb className='rounded p-2 icons' />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container_about p-3 my-5 form'>
                        <h1 className='headers text-center mb-5'>Skills Acquired</h1>
                        <div className='d-flex justify-content-evenly skills_icons'>
                            <TbBrandHtml5 className='rounded p-1 icons' />
                            <TbBrandCss3 className='rounded p-1 icons' />
                            <TbBrandJavascript className='rounded p-1 icons' />
                            <TbBrandBootstrap className='rounded p-1 icons' />
                            <FaReact className='rounded p-2 icons' />
                            <FaNodeJs className='rounded p-2 icons' />
                            <SiExpress className='rounded p-2 icons' />
                            <TbBrandMongodb className='rounded p-2 icons' />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About