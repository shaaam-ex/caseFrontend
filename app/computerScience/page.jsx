import Link from 'next/link';
import './computerScience.css';

import { Roboto } from 'next/font/google';
import Counter from '../counter/page';
const roboto = Roboto({
    subsets: ['latin'],
    weight: '400'
})

export default function ComputerScience() {

    return (
        <>
            <div className="main-container-computer-science">
                
                {/* <head>
                    <title>Department of Computer Science - Sir Syed CASE Institute of Technology </title>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff"></meta>
                </head> */}

                <div className="first-banner-container-computer-science">
                    <div className="content-first-banner-container-computer-science">
                        <div className="left-div-content-first">
                            <h1>Department Of Computer Science</h1>
                        </div>

                        <div className="right-div-content-first">
                            <div className="text-div-right-div-content-first">
                                <h3>
                                    <span>Students Doing Freelancing: </span>
                                    Department Is Producing Freelancers For The IT Industry During Their Studies. 
                                    List Of Our Present Freelancers
                                </h3>
                            </div>

                            <div className="click-here-button-right-div-content-first">
                                <Link className='standard-rectangle-button' href={'#'}>Click Here</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-div-container-computer-science">
                    <div className="current-directory-div-second-div-computer-science">
                        <p><a href="/landingPage">Home</a> <span style={{color: 'rgba(0, 0, 0, 0.6)'}}>/</span> Department of Computer Science</p>
                    </div>

                    <div className="mission-statement-accreditation-div-second-div-container-computer-science">
                        <div className="mission-statement-div-cs">
                            <h1>Mission Statement</h1>
                                <p>
                                    Prepare future Computer Scientists to achieve excellence in the core 
                                    competencies of computer science that enable them to effectively develop 
                                    software solutions for challenges faced in industry and research with the 
                                    highest level of integrity.
                                </p>
                        </div>

                        <div className="accreditation-div-cs">
                            <h2>Accreditation of BSCS from HEC</h2>
                            <div>
                                <p>Accreditation from National Computing Education Accreditation Council (NCEAC).</p>

                                <ol>
                                    <li>Category/Rating X for two years (2011‐2012)</li>
                                    <li>Category/Rating W for three years (2013‐2015)</li>
                                </ol>

                                <p>Zero Visit Accreditation from HEC for BS Artificial Intelligence and Software 
                                Engineering in Progress.</p>
                            </div>
                        </div>
                    </div>

                    <div className="good-news-container-second-div">
                        <h2>Good News for Intermediate and Equivalent Pre-Medical Students</h2>
                        <p>
                            <span>All bachelor’s Programs of the Department of Computer Science are offered for FSC Pre-Medical students.</span>
                            <br />
                            <br />
                            The National Computing Education & Accreditation
                            Council (NCEAC) of HEC has approved the admissions in 
                            Computing programs for those students who have done 
                            intermediate education (FSC or equivalent) in 
                            Pre-Medical with a minimum of 50% marks. These students
                            are required to pass deficiency courses of Mathematics 
                            of 6 credit hours within 1 year of their regular studies.
                            The deficiency courses should cover most of the relevant topics
                            to a Bachelor’s Degree in computing education from the 
                            intermediate level of Mathematics.
                        </p>

                        <h2>Fee Structure</h2>

                        <a href="#">Get Fee Structure Details</a>
                    </div>

                    <div className="available-cs-programs-div-second-div-computer-science">
                        <h2>Available Programs</h2>
                        
                        <p>
                            The available programs for applicants vary, for students
                            that have cleared their FSC (In Pre-Engineering) and ICS can 
                            apply for the programs and will follow the regular courses during
                            their tenure at CASE but for medical students, they have to study additional
                            mathematics courses. The minimum percentage required to apply for the 
                            following courses is 50%.
                            The courses available are as follows: -
                        </p>

                        <ol>
                            <li><a href="#">BSCS (BS Computer Science)</a></li>
                            <li><a href="#">BSAI (BS Artificial Intelligence)</a></li>
                            <li><a href="#">BSSE (BS Software Engineering)</a></li>
                            <li><a href="#">BSCYS (BS Cyber Security)</a></li>
                            <li><a href="#">BBA (Bachelor of Business Administration)</a></li>
                            <li><a href="#">BS Accounting and Finance</a></li>
                        </ol>
                    </div>
                </div>
                <Counter />
            </div>
        </>
    )
}