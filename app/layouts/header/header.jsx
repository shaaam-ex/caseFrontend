import Link from 'next/link';
import './header.css';
import { MdMenu, MdArrowDropDown } from "react-icons/md";


export default function Header() {
    return (
        <>
            <div className="main-container-header">
                <div className="logo-container-header">
                    <img src="https://www.case.edu.pk/wp-content/uploads/2023/05/CASE-Logo-1.png" alt="" />
                </div>

                <div className="middle-div-container-header">
                    <ul className='clickable-hoverable-links-header'>
                        <li><Link href='/landingPage'>Home</Link></li>
                        <li><Link href='#'>Admissions</Link><MdArrowDropDown className='drop-down-icon' /></li> {/* DropDown */}
                        <li><Link href='#'>Departments</Link><MdArrowDropDown className='drop-down-icon' /></li> {/* DropDown */}
                        <li><Link href='#'>Portal</Link><MdArrowDropDown className='drop-down-icon' /></li> {/* DropDown */}
                        <li><Link href='#'>About</Link></li>
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