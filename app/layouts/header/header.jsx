'use client'

import Link from 'next/link';
import './header.css';

import { CiSearch } from "react-icons/ci";

import { MdMenu, MdArrowDropDown, MdClose } from "react-icons/md";

import { useEffect, useState } from 'react';

export default function Header() {

    const [initialScrollPosition, setInitialScrollPosition] = useState(200);

    function handleHamburger() {
        const menuHeader = document.querySelector('.clickable-hoverable-links-header-hamburger');
        menuHeader.classList.toggle('visible');
    }

    function handleScrollHeader(e) {
        if (screen.width > 800) {
            let main_container_header = document.querySelector('.main-container-header');
            let caseMainImg = document.querySelector('.logo-container-header > img');

            let currentScrollPosition = window.scrollY;
        
            if(currentScrollPosition > initialScrollPosition) {
                caseMainImg.style.height = '55px';
                caseMainImg.style.width = '195px';

                main_container_header.style.height = '10vh';
                main_container_header.style.padding = '0';
            }

            else {
                caseMainImg.style.height = '70px';
                caseMainImg.style.width = '224px';

                main_container_header.style.height = '15vh';
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollHeader);
    }, [])
    
    return (
        <>
            <div className="main-container-header">
                <div className="logo-container-header">
                    <img src="https://www.case.edu.pk/wp-content/uploads/2023/05/CASE-Logo-1.png" alt="" />
                </div>

                <div className="middle-div-container-header">
                    <ul className='clickable-hoverable-links-header'>
                        <li>
                            <Link href='/landingPage'>Home</Link>
                        </li>

                        <li className='absolute-child-drop-down-container'>
                            <Link href='#'>Admissions</Link><MdArrowDropDown className='drop-down-icon' />

                            <ul className='container-available-options-drop-down-menu'>
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='#'>Offered Programs</Link></li>
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='#'>How to Apply</Link></li>
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='#'>Eligibility Criteria</Link></li>
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='#'>Scholarships</Link></li>
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='#'>Fee Structure</Link></li>
                            </ul>
                        </li> {/* DropDown */}

                        <li className='absolute-child-drop-down-container'>
                            <Link href='#'>Departments</Link><MdArrowDropDown className='drop-down-icon' />

                            <ul className='container-available-options-drop-down-menu'>
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='/computerScience'>Computer Science</Link></li>
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='#'>Electrical Engineering</Link></li>
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='#'>Management Sciences</Link></li>
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='#'>Sciences and humanities</Link></li>
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='#'>Medical Sciences</Link></li>
                            </ul>
                        </li> {/* DropDown */}

                        <li className='absolute-child-drop-down-container'>
                            <Link href='#'>Portal</Link><MdArrowDropDown className='drop-down-icon' />

                            <ul className='container-available-options-drop-down-menu'>
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='#'>Faculty Portal</Link></li>
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='#'>Student Portal</Link></li>
                            </ul>
                        </li> {/* DropDown */}

                        <li>
                            <Link href='/aboutPage'>About</Link>
                        </li>
                    </ul>
                </div>

                <div className="right-div-container-header">
                    <MdMenu className='hamburger-menu-button-header' onClick={handleHamburger} />
                    <div className="hamburger-menu-header">
                        <ul className='clickable-hoverable-links-header-hamburger'>
                            <MdClose className='hamburger-menu-button-header close' onClick={handleHamburger} />
                            <li className='absolute-child-drop-down-container-hamburger'>
                                <Link style={{marginTop: '50px'}} className='clickable-link-inner-drop-down-hamburger default-playfair-link' href='/landingPage'>Home</Link>
                            </li>

                            <li className='absolute-child-drop-down-container-hamburger'>
                                <Link className='clickable-link-inner-drop-down-hamburger default-playfair-link' href='#'>Admissions</Link>
                            </li> {/* DropDown */}

                            <li className='absolute-child-drop-down-container-hamburger'>
                                <Link href='#'>Departments</Link>
                            </li> {/* DropDown */}

                            <li className='absolute-child-drop-down-container-hamburger'>
                                <Link href='#'>Portal</Link>
                            </li> {/* DropDown */}

                            <li className='absolute-child-drop-down-container-hamburger'>
                                <Link className='clickable-link-inner-drop-down-hamburger default-playfair-link' href='#'>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <CiSearch className='search-icon-header' />

                <div className="search-bar-div">
                    <input type="text" name="search-query" id="search-query" placeholder='Search' />
                </div>
            </div>
        </>
    )
}