'use client'

import { useEffect, useState } from 'react';
import './mainCS.css';
import Table from '@/app/layouts/semesterTable/page';

const page = () => {

    const [semesters, setSemesters] = useState([]);

    useEffect(() => {
        setSemesters([
            {
                name: 'Semester 1',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'SC1201',
                        name: 'Applied Physics',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'SC1001',
                        name: 'Calculus & Analytic Geometry',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'English Composition & Comprehension',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'CS1001',
                        name: 'Programming Fundamentals',
                        credits: [3, 1],
                        preRequisite: 'Freshman Standing'
                    }
                ],
                total: [15, 18] // [FSc/ICS, Med]
            },
            
            {
                name: 'Semester 2',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'HU1003',
                        name: 'Communication & Presentation Skills',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'CS1502',
                        name: 'Digital Logic and Design',
                        credits: [3, 1],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1101',
                        name: 'Islamic Studies',
                        credits: [2, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'SC1002',
                        name: 'Multivariate Calculus',
                        credits: [2, 0],
                        preRequisite: 'SC1001'
                    },

                    {
                        code: 'HU1102',
                        name: 'Pakistan Studies',
                        credits: [2, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'CS1002',
                        name: 'Programming Techniques',
                        credits: [1, 1],
                        preRequisite: 'CS1001'
                    },
                ],
                total: [15, 17] // [FSc/ICS, Med]
            },
            
            {
                name: 'Semester 3',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'CS2503',
                        name: 'Computer Organization & Assembly Language',
                        credits: [3, 1],
                        preRequisite: 'SPM'
                    },

                    {
                        code: 'CS2003',
                        name: 'Data Structure and Algorithms',
                        credits: [3, 1],
                        preRequisite: 'CS1001'
                    },

                    {
                        code: 'SC2003',
                        name: 'Differential Equations',
                        credits: [3, 0],
                        preRequisite: 'SC1001'
                    },

                    {
                        code: 'HU1102',
                        name: 'Pakistan Studies',
                        credits: [2, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'CS2301',
                        name: 'Discrete Structures',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'SC1002',
                        name: 'Multivariate Calculus',
                        credits: [2, 0],
                        preRequisite: 'SC1001'
                    },

                    {
                        code: 'CS2004',
                        name: 'Object Oriented Programming',
                        credits: [3, 1],
                        preRequisite: 'CS1001'
                    },
                ],
                total: [18, 19] // [FSc/ICS, Med]
            },
            
        ])
    }, [])

    return (
        <>
            <head>
                <link rel="canonical" href="https://case.exton-cs.me/landingpage" />
                <title>Department of Computer Science - Sir Syed CASE Institute of Technology </title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>

                <meta name="description" 
                    content="Computer Science Department, Sir Syed CASE Institute of technology. exton-cs.me"
                />
            </head>

            <div className="main-container-main-cs">
                <div className="banner-image-main-cs">
                    <div className="image-main-cs-first">
                        <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1712585015/case/banners/mainCS/yg1uqa0zjiyfquawlz3q.jpg" alt="" />
                    </div>
                    
                    <div className="h2-banner-container-main-cs">
                        <h2>Bachelor's of Science (Computer Science)</h2>
                    </div>
                </div>

                <div className="basic-info-cs">
                    <div className="first-div-basic-info-cs">
                        <div className="program-info-cs-first-div">
                            <h2>
                                Program Info
                            </h2>
                            <p>
                                The program focuses on encouraging students to develop and use 
                                abstract models in addition to applying the respective technologies 
                                in practical situations. This program focuses on establishing a 
                                strong mathematical foundation, basic aspects of computing, and 
                                advanced technical electives covering areas like Intelligent Systems,
                                Software Engineering & Net-Centric, Data Sciences, Information 
                                Security, E‐commerce, and Biomedical.
                            </p>
                        </div>

                        <div className="degree-requirements-cs-first-div">
                            <h2>
                                Degree Requirements
                            </h2>
                            <p>
                                For the award of BS (CS) degree, a student must ensure the following:

                                <ul>
                                    <li>Minimum of 133 credit hours.</li>
                                    <li>A senior design project of 6 credit hours.</li>
                                    <li>minimum CGPA of 2.00.</li>
                                </ul>
                            </p>
                        </div>

                        <div className="eligibility-criteria-cs-first-div">
                            <h2>
                                Eligibility Criteria
                            </h2>
                            <p>
                                In order to apply for BS (CS), the applicant must ensure the following:

                                <ul>
                                    <li>
                                        At least 50 % marks in Intermediate (HSSC), A-Level &
                                        equivalent examination with Mathematics or equivalent
                                        qualiﬁcation with Mathematics certiﬁed by IBCC.
                                    </li>

                                    <li>
                                        At least 50% marks for FSc, A-level or equivalent in 
                                        Pre-Medical. No need to appear in Board intermediate 
                                        level (FSC or equivalent) exams to clear their mathematics 
                                        courses.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="semester-plan-cs">
                            <h2>
                                Semester Plan
                            </h2>

                            <div className="main-container-semester-plan-inner">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page