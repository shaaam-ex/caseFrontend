'use client'

import { useEffect, useState } from 'react';
import './applyNowPage.css';
import { CgCheck } from "react-icons/cg";

const page = () => {

    const [currentForm, setCurrentForm] = useState(1);
    const [availablePrograms, setAvailablePrograms] = useState([]);

    const handleNextButton = () => {
        currentForm < 4 ? setCurrentForm(currentForm+1) : setCurrentForm(currentForm);
    }

    useEffect(() => {
        setAvailablePrograms([
            {
                name: 'Bachelors of Computer Science [BSCS]',
                code: 'BSCS'
            },

            {
                name: 'Bachelors of Software Engineering [BSSE]',
                code: 'BSSE'
            },

            {
                name: 'Bachelors of Artificial Intelligence',
                code: 'BSAI'
            },

            {
                name: 'Bachelors of Cyber Security',
                code: 'BSCYS'
            }
        ])
    }, [])

    useEffect(() => {
        if(currentForm > 1) { 
            document.querySelector(`.apply-now-${currentForm - 1}`).classList.add('apply-now-form-disabled');


            document.querySelector(`.apply-now-${currentForm}`).classList.remove('apply-now-form-disabled');

            // Indicators
            document.querySelector(`.active-individual-status-container-apply-now-page`).classList.remove('active-individual-status-container-apply-now-page');

            if(currentForm == 2) {
                document.querySelector('.details-individual-status-container-apply-now-page').classList.add('active-individual-status-container-apply-now-page');
            }

            else if(currentForm == 3) {
                document.querySelector('.confirm-individual-status-container-apply-now-page').classList.add('active-individual-status-container-apply-now-page');
            }

            else if(currentForm == 4) {
                document.querySelector('.submitted-individual-status-container-apply-now-page').classList.add('active-individual-status-container-apply-now-page');
            }
        }
    }, [currentForm])

    return (
        <>
            <div className="main-container-apply-now-page">
                <head>
                    <link rel="canonical" href="https://case.exton-cs.me/applyNowPage" />
                    <title>Apply Now - Sir Syed CASE Institute of Technology </title>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff"></meta>


                    
                    <meta name="description" 
                        content="Join one of the leading institutes of Pakistan, Sir Syed CASE Institute of Technology, Pakistan. exton-cs.me"
                    />
                </head>

                <div className="space-container-apply-now-page"></div>

                <div className="parent-container-apply-now-page">
                    <div className="first-div-apply-now-page">
                        <div className="text-div-first-div-apply-now-page">
                            <h1>Apply Now!</h1>
                            <h2>To join 800+ other skillful students at CASE</h2>
                        </div>

                        <div className="img-div-first-div-apply-now-page">
                            <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1716051315/case/apply_now_student_smiling_1_nhwah5.jpg" alt="" />
                        </div>
                    </div>

                    <div className="space-container-apply-now-page"></div>

                    <div className="second-div-apply-now-page">
                        <h1>Before you Apply</h1>
                        <p>Get ready to apply for admission to study with CASE by checking out the eligibility criteria:</p>
                        <a href="#">Click here to check Eligibility criteria</a>
                    </div>

                    <div className="space-container-apply-now-page"></div>

                    <div className="third-div-apply-now-page">
                        <h1>Application Form</h1>
                        <div className="status-indicator-container-third-div-apply-now-page">
                            <div className="individual-status-container-third-div-apply-now-page qualification-individual-status-container-apply-now-page active-individual-status-container-apply-now-page">
                                <p style={currentForm !== 1 ? {backgroundColor: 'white', color: 'black', border: '1px solid'} : {}}>1</p>
                                <p className='checkMark-disabled' id='checkMark-qualification'><CgCheck /></p>
                                <p>Qualification</p>
                            </div>
                            
                            <div className="individual-status-container-third-div-apply-now-page details-individual-status-container-apply-now-page">
                                <p style={currentForm !== 2 ? {backgroundColor: 'white', color: 'black', border: '1px solid'} : {}}>2</p>
                                <p className='checkMark-disabled' id='checkMark-details'><CgCheck /></p>
                                <p>Details</p>
                            </div>

                            <div className="individual-status-container-third-div-apply-now-page confirm-individual-status-container-apply-now-page">
                                {/* <p style={currentForm !== 3 ? {backgroundColor: 'white', color: 'black', border: '1px solid'} : {}}>3</p> */}
                                <p>3</p>
                                <p className='checkMark-disabled' id='checkMark-confirm'><CgCheck /></p>
                                <p>Confirm</p>
                            </div>

                            <div className="individual-status-container-third-div-apply-now-page submitted-individual-status-container-apply-now-page">
                                <p style={currentForm !== 4 ? {backgroundColor: 'white', color: 'black', border: '1px solid'} : {}}>4</p>
                                <p className='checkMark-disabled' id='checkMark-submitted'><CgCheck /></p>
                                <p>Submitted</p>
                            </div>
                        </div>

                        <div className="application-apply-now-form-qualification apply-now-form-visible apply-now-1">
                            <h2>Choose your desired Course</h2>
                            {
                                availablePrograms.map(curr => (
                                    <div className='individual-program-apply-now-form' key={curr.code}>
                                        <input type="radio" name="individual-program-apply-now-radio" id="individual-program-apply-now-radio" value={curr.code} />
                                        <p>{curr.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="application-apply-now-form-details apply-now-form-disabled apply-now-2">
                            <div className="full-name-container-apply-now-2">
                                <h3>Full Name</h3>
                                <input type="text" name="full-name-input-box" id="full-name-input-box" />
                            </div>
                            <div className="father-name-container-apply-now-2"></div>
                        </div>
                        <div className="application-apply-now-form-confirm apply-now-form-disabled apply-now-3">
                            apply3
                        </div>
                        <div className="application-apply-now-form-submitted apply-now-form-disabled apply-now-4">
                            apply4
                        </div>

                        <div className="button-container-apply-now-form">
                            <button onClick={handleNextButton} className='next-button-apply-now-form'>
                                {
                                    currentForm === 4 ? "Finish" : "Next"
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;