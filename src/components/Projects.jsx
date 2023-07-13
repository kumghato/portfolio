import React from 'react'
import netflix from '../assets/images/Netflix_clone_kk.png'
import todo from '../assets/images/TodoApp.jpg'

function Projects() {
    const projects = [
        {
            title: "Netflix Clone",
            description: "Front-end Netflix clone using React JS, pure CSS and the entire Backend is made using Node.js, Express.Js and MongoDB for Database.",
            git: "https://github.com/kumghato/movie_app",
            image: netflix,
            live: ""
        },
        {
            title: "ToDo App",
            description: "A simple Todo App Api using Express Js, EJS, MongoDB",
            git: "https://github.com/kumghato/toDo-app",
            image: todo,
            live: ""
        },

    ]
    return (
        <>
            <div className='Project_header'>
                <h1 className='headers_big font_color text-center p-5 fw-bold'>From the <em>brain </em>to your <em>screen</em></h1>
            </div>
            {projects.map((item) => {
                return (
                    <div className='container_projects mx-auto my-5 d-flex form'>
                        <div className='col-lg-5 col-md-12 col-sm-12'>

                            <img src={item.image} alt="netlixClone" style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
                        </div>
                        <div class="title col-lg-7 d-flex flex-wrap">

                            <div className='project_heading mb-5'>
                                <h1 className='fw-semibold lh-lg'>{item.title}</h1>
                                <p className='fw-normal'>{item.description}</p>
                            </div>

                            <div className='d-flex me-auto mt-5'>
                                <a href={item.git} target='_blank' className='btn_custom px-5 py-2 d-flex align-items-center me-4 justify-content-center'>
                                    <i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
                                <a href='https://www.github.com' target='_blank' className='btn_custom px-5 py-2 d-flex align-items-center ms-4 justify-content-center'>
                                    Live</a>
                            </div>
                        </div>
                    </div>

                )
            })}
        </>
    )
}

export default Projects