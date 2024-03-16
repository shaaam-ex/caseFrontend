'use client'

import Link from 'next/link';
import './header.css';

import { MdMenu, MdArrowDropDown } from "react-icons/md";

import { useEffect } from 'react';

export default function Header() {
    
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
                                <li className='clickable-available-link-drop-down-menu'><Link className='clickable-link-inner-drop-down' href='#'>Computer Science</Link></li>
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
                            <Link href='#'>About</Link>
                        </li>
                    </ul>
                </div>

                <div className="right-div-container-header">
                    {/* <MdMenu className='hamburger-menu-button-header' /> */}
                    <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1710505935/case/e0gkiton8cke4sukhjbg.png" alt="" />
                </div>
            </div>
        </>
    )
}