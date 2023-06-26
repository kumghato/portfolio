import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    return (
        <>
            <nav class="navbar navbar-expand-lg bg">
                <div class="container-fluid nav">
                    <label class="nav_text" href="#">Kumghato K Khala</label>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavLink to={'/'} style={{ textDecoration: "none" }}>
                                <li className="mx-3" >
                                    <a className="nav_text  " aria-current="page">Home</a>
                                </li>
                            </NavLink>
                            <NavLink to={'/about'} style={{ textDecoration: "none" }}>
                                <li class="mx-3">
                                    <a href="" className=' nav_text '>About</a>
                                </li>
                            </NavLink>
                            <NavLink to={'/projects'} style={{ textDecoration: "none" }}>
                                <li class="mx-3">
                                    <a href="" className='nav_text '>Projects</a>
                                </li>
                            </NavLink>
                            <NavLink to={'/contact'} style={{ textDecoration: "none" }}>
                                <li class="mx-3">
                                    <a href="" className='nav_text '>Contact</a>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar




