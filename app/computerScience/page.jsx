import Link from 'next/link';
import './computerScience.css';

import { Roboto } from 'next/font/google';
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
                </div>
            </div>
        </>
    )
}