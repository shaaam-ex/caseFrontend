import './header.css';
import { MdMenu } from "react-icons/md";


export default function Header() {
    return (
        <>
            <div className="main-container-header">
                <div className="logo-container-header">
                    <img src="https://www.case.edu.pk/wp-content/uploads/2023/05/CASE-Logo-1.png" alt="" />
                </div>

                <div className="right-div-container-header">
                    <MdMenu className='hamburger-menu-button-header' />
                </div>
            </div>
        </>
    )
}