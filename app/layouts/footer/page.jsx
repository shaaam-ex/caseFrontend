import './footer.css';

import { BiLogoFacebook, BiLogoLinkedin, BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";

export default function Footer() {
    return(
        <>
            <div className="main-container-footer">
                <div className="left-div-container-footer">
                    <img src="https://case.edu.pk/wp-content/uploads/2023/05/case-logo-lg-copy-150x150.png" alt="" />
                    <h2>Sir Syed CASE Institute of Technology</h2>
                </div>
                
                <div className="middle-div-container-footer">

                    <div className="inner-div-middle-div-container-footer">

                        <h2>Contact Us</h2>


                        <h3>Phone</h3>
                        <p>+92 51 5203 472</p>

                        <h3>Email</h3>
                        <p>info@case.edu.pk</p>

                        <h3>Location</h3>
                        <p>Islamabad, PK</p>

                    </div>
                    
                    <div className="inner-div-middle-div-container-footer">
                        <h2>Quick Links</h2>

                        <div className="quick-links-footer">
                            <a href="#">Degree Programs</a>
                            <a href="#">Fee Structure</a>
                            <a href="#">Downloads</a>
                            <a href="#">CASE LMS</a>
                            <a href="#">FAQs</a>
                        </div>
                    </div>
                </div>

                <div className="right-div-container-footer">
                    {/* <h2>Follow us</h2>

                    <h3>Our social links</h3> */}

                    <BiLogoFacebook className='clickable-social-links-footer' size={'25px'} color='white' />
                    <BiLogoLinkedin className='clickable-social-links-footer' size={'25px'} color='white' />
                    <BiLogoInstagram className='clickable-social-links-footer' size={'25px'} color='white' />
                    <BiLogoWhatsapp className='clickable-social-links-footer' size={'25px'} color='white' />

                </div>
            </div>
        </>
    )
}