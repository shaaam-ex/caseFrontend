'use client'

import { useEffect, useState } from 'react';
import './mainCS.css';
import Table from '@/app/layouts/semesterTable/Table';


const page = () => {

    const [semesters, setSemesters] = useState([]);

    const[currentProgram, setCurrentProgram] = useState('BSCS');

    const [programs, setPrograms] = useState({
        "BSCS": {
            programInfo: "BS Computer Science includes a comprehensive set of courses that cover both foundational and advanced topics, ensuring students are well-versed in essential areas such as algorithms, software engineering, and systems design, as well as emerging fields like artificial intelligence and data science. ",
            semesters: [{
                name: 'Semester 1',
                id: 'cs-sem-1',
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
                id: 'cs-sem-2',
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
                id: 'cs-sem-3',
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
            
            {
                name: 'Semester 4',
                id: 'cs-sem-4',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'N/A',
                        name: 'CS Elective–I',
                        credits: [3, 1],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'CS2201',
                        name: 'Introduction to Database Systems',
                        credits: [3, 1],
                        preRequisite: 'CS2003'
                    },

                    {
                        code: 'CS2504',
                        name: 'Operating Systems',
                        credits: [3, 1],
                        preRequisite: 'CS2003'
                    },

                    {
                        code: 'SC2004',
                        name: 'Probability and statistics',
                        credits: [3, 0],
                        preRequisite: 'SOPHOMORE STANDING'
                    },

                    {
                        code: 'CS2101',
                        name: 'Software Engineering',
                        credits: [3, 0],
                        preRequisite: 'SOPHOMORE STANDING'
                    }
                ],
                total: [18, 18] // [FSc/ICS, Med]
            },
            
            {
                name: 'Semester 5',
                id: 'cs-sem-5',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'N/A',
                        name: 'CS Elective–II',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'CS4303',
                        name: 'Artificial Intelligence',
                        credits: [3, 1],
                        preRequisite: 'CS2003'
                    },

                    {
                        code: 'N/A',
                        name: 'CS Elective–III',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'CS3005',
                        name: 'Design & Analysis of Algorithms',
                        credits: [3, 0],
                        preRequisite: 'CS2003'
                    },

                    {
                        code: 'SC3005',
                        name: 'Linear Algebra',
                        credits: [3, 0],
                        preRequisite: 'JUNIOR STANDING'
                    },

                    {
                        code: 'CS3302',
                        name: 'Theory of Automata and Formal Languages',
                        credits: [3, 0],
                        preRequisite: 'CS2301'
                    }
                ],
                total: [19, 0] // [FSc/ICS, Med]
            },
            
            {
                name: 'Semester 6',
                id: 'cs-sem-6',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'CS3401',
                        name: 'Computer Communication and Networks',
                        credits: [3, 1],
                        preRequisite: 'JUNIOR STANDING'
                    },

                    {
                        code: 'N/A',
                        name: 'CS Elective–IV',
                        credits: [3, 1],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'SC3006',
                        name: 'Numerical Computing',
                        credits: [2, 0],
                        preRequisite: 'JUNIOR STANDING'
                    },

                    {
                        code: 'HU3004',
                        name: 'Technical & Business Writing',
                        credits: [3, 0],
                        preRequisite: 'JUNIOR STANDING'
                    },

                    {
                        code: 'N/A',
                        name: 'University Elective-I',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },
                ],
                total: [16, 0] // [FSc/ICS, Med]
            },
            
            {
                name: 'Semester 7',
                id: 'cs-sem-7',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'N/A',
                        name: 'CS Elective–V',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'CS4006',
                        name: 'Compiler Construction',
                        credits: [3, 0],
                        preRequisite: 'CS3302'
                    },

                    {
                        code: 'CS4405',
                        name: 'Parallel & Distributed Computing',
                        credits: [3, 0],
                        preRequisite: 'CS2504'
                    },

                    {
                        code: 'CS4111',
                        name: 'Senior Design Project-I',
                        credits: [2, 0],
                        preRequisite: 'SC'
                    },

                    {
                        code: 'N/A',
                        name: 'University Elective-II',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },
                ],
                total: [14, 0] // [FSc/ICS, Med]
            },
            
            {
                name: 'Semester 8',
                id: 'cs-sem-8',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'N/A',
                        name: 'CS Elective-VI',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'CS4406',
                        name: 'Information Security',
                        credits: [3, 0],
                        preRequisite: 'Senior Standing'
                    },

                    {
                        code: 'CS4112',
                        name: 'Senior Design Project-II',
                        credits: [4, 0],
                        preRequisite: 'CS4111'
                    },

                    {
                        code: 'N/A',
                        name: 'University Elective- III',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'N/A',
                        name: 'University Elective- IV',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },
                ],
                total: [16, 0] // [FSc/ICS, Med]
            },
            
            ],

        },

        "BSSE": {
            programInfo: "BS Software Engineering program includes a comprehensive set of courses that cover both foundational and advanced topics, ensuring students are well-versed in essential areas such as software development, software design and architecture, quality assurance, as well as emerging fields like cloud computing, cybersecurity, and blockchain technology. We prioritize understanding market demands, preparing students for rewarding careers in software development, IT consulting, and product management, and enabling them to develop innovative software solutions.",
            semesters: [
                {
                name: 'Semester 1',
                id: 'se-sem-1',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'CS1001',
                        name: 'Programming Fundamentals',
                        credits: [3, 1],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'SC1001',
                        name: 'Introduction to ICT',
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
                        code: 'HU1002',
                        name: 'Discrete Structures',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Islamic Studies/Ethics (Non Med)',
                        credits: [2, 0],
                        preRequisite: 'Freshman Standing'
                    },
                ],
                total: [15, 18] // [FSc/ICS, Med]
            },

            {
                name: 'Semester 2',
                id: 'se-sem-2',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'CS1001',
                        name: 'Programming Techniques',
                        credits: [2, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'SC1001',
                        name: 'Probability and Statistics',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Software Engineering',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Technical & Business Writing',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Calculus & Analytical Geometry',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },
                ],
                total: [15, 18] // [FSc/ICS, Med]
            },

            {
                name: 'Semester 3',
                id: 'se-sem-3',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'CS1001',
                        name: 'Linear Algebra',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'SC1001',
                        name: 'Software Requirement Engineering',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Communication & Presentation Skills',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Data Structures & Algorithms',
                        credits: [4, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Applied Physics',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },
                ],
                total: [15, 18] // [FSc/ICS, Med]
            },

            {
                name: 'Semester 4',
                id: 'se-sem-4',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'CS1001',
                        name: 'Operating System',
                        credits: [4, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'SC1001',
                        name: 'Object Oriented Programming',
                        credits: [4, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Pakistan Studies',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'SE -Supp 2',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Computer Communication and Network',
                        credits: [4, 0],
                        preRequisite: 'Freshman Standing'
                    },
                ],
                total: [15, 18] // [FSc/ICS, Med]
            },

            {
                name: 'Semester 5',
                id: 'se-sem-5',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'CS1001',
                        name: 'Database Systems',
                        credits: [4, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'SC1001',
                        name: 'Web Engineering',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'SE-Supp 1',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'SE-Elective 2',
                        credits: [4, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Human Computer Interaction',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },
                ],
                total: [15, 18] // [FSc/ICS, Med]
            },

            {
                name: 'Semester 6',
                id: 'se-sem-6',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'CS1001',
                        name: 'SE-Elec 1',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'SC1001',
                        name: 'TQM',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Mobile Computing',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Software Design and Arch',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'SE Supp 3',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'SE Elective 3',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },
                ],
                total: [15, 18] // [FSc/ICS, Med]
            },

            {
                name: 'Semester 7',
                id: 'se-sem-7',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'CS1001',
                        name: 'Information Security',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'SC1001',
                        name: 'SE-Elec 5',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Software construction and development',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Software Project Management',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Entrepreneurship',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Islamic Studies/Ethics (Med)',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Final Year Project-1',
                        credits: [2, 0],
                        preRequisite: 'Freshman Standing'
                    },
                ],
                total: [15, 18] // [FSc/ICS, Med]
            },

            {
                name: 'Semester 8',
                id: 'se-sem-8',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'CS1001',
                        name: 'Univ. Elective-3',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'SC1001',
                        name: 'Marketing',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Professional Practices',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Software Quality Engineering',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Software Reengineering',
                        credits: [3, 0],
                        preRequisite: 'Freshman Standing'
                    },

                    {
                        code: 'HU1002',
                        name: 'Final Year Project-2',
                        credits: [4, 0],
                        preRequisite: 'Freshman Standing'
                    },
                ],
                total: [15, 18] // [FSc/ICS, Med]
            },
        ]
        },

        "BSAI": {
            programInfo: "BS Artificial Intelligence program includes a comprehensive set of courses that cover both foundational and advanced topics, ensuring students are well-versed in essential areas such as machine learning, neural networks, and natural language processing. We also emphasize understanding market demands, preparing students for lucrative careers in AI-driven sectors such as healthcare, finance, and autonomous systems, and enabling them to develop innovative AI products and solutions.",
            semesters: []
        },

        "BSCYS": {
            programInfo: "BS Cyber Security program includes a comprehensive set of courses that cover both foundational and advanced topics, ensuring students are well-versed in essential areas such as network security, cryptography, ethical hacking, and digital forensics, as well as emerging fields like artificial intelligence in cybersecurity, cloud security, and blockchain technology. We also focus on understanding market demands, preparing students for lucrative careers in cybersecurity analysis, information security management, and threat intelligence, and empowering them to develop innovative security solutions.",
            semesters: []
        },

        "ADCS": {
            programInfo: "AD Computer Science includes a comprehensive set of courses that cover both foundational and advanced topics, ensuring students are well-versed in essential areas such as algorithms, software engineering, and systems design, as well as emerging fields like artificial intelligence and data science. ",
            semesters: []
        },

        "MSCS": {
            programInfo: "MS Computer Science includes a comprehensive set of courses that cover both foundational and advanced topics, ensuring students are well-versed in essential areas such as algorithms, software engineering, and systems design, as well as emerging fields like artificial intelligence and data science. ",
            semesters: []
        }
    });

    // useEffect(() => {
    // }, [currentProgram])

    // Initialize Semesters
    useEffect(() => {
        setSemesters([
            {
                name: 'Semester 1',
                id: 'cs-sem-1',
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
                id: 'cs-sem-2',
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
                id: 'cs-sem-3',
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
            
            {
                name: 'Semester 4',
                id: 'cs-sem-4',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'N/A',
                        name: 'CS Elective–I',
                        credits: [3, 1],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'CS2201',
                        name: 'Introduction to Database Systems',
                        credits: [3, 1],
                        preRequisite: 'CS2003'
                    },

                    {
                        code: 'CS2504',
                        name: 'Operating Systems',
                        credits: [3, 1],
                        preRequisite: 'CS2003'
                    },

                    {
                        code: 'SC2004',
                        name: 'Probability and statistics',
                        credits: [3, 0],
                        preRequisite: 'SOPHOMORE STANDING'
                    },

                    {
                        code: 'CS2101',
                        name: 'Software Engineering',
                        credits: [3, 0],
                        preRequisite: 'SOPHOMORE STANDING'
                    }
                ],
                total: [18, 18] // [FSc/ICS, Med]
            },
            
            {
                name: 'Semester 5',
                id: 'cs-sem-5',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'N/A',
                        name: 'CS Elective–II',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'CS4303',
                        name: 'Artificial Intelligence',
                        credits: [3, 1],
                        preRequisite: 'CS2003'
                    },

                    {
                        code: 'N/A',
                        name: 'CS Elective–III',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'CS3005',
                        name: 'Design & Analysis of Algorithms',
                        credits: [3, 0],
                        preRequisite: 'CS2003'
                    },

                    {
                        code: 'SC3005',
                        name: 'Linear Algebra',
                        credits: [3, 0],
                        preRequisite: 'JUNIOR STANDING'
                    },

                    {
                        code: 'CS3302',
                        name: 'Theory of Automata and Formal Languages',
                        credits: [3, 0],
                        preRequisite: 'CS2301'
                    }
                ],
                total: [19, 0] // [FSc/ICS, Med]
            },
            
            {
                name: 'Semester 6',
                id: 'cs-sem-6',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'CS3401',
                        name: 'Computer Communication and Networks',
                        credits: [3, 1],
                        preRequisite: 'JUNIOR STANDING'
                    },

                    {
                        code: 'N/A',
                        name: 'CS Elective–IV',
                        credits: [3, 1],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'SC3006',
                        name: 'Numerical Computing',
                        credits: [2, 0],
                        preRequisite: 'JUNIOR STANDING'
                    },

                    {
                        code: 'HU3004',
                        name: 'Technical & Business Writing',
                        credits: [3, 0],
                        preRequisite: 'JUNIOR STANDING'
                    },

                    {
                        code: 'N/A',
                        name: 'University Elective-I',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },
                ],
                total: [16, 0] // [FSc/ICS, Med]
            },
            
            {
                name: 'Semester 7',
                id: 'cs-sem-7',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'N/A',
                        name: 'CS Elective–V',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'CS4006',
                        name: 'Compiler Construction',
                        credits: [3, 0],
                        preRequisite: 'CS3302'
                    },

                    {
                        code: 'CS4405',
                        name: 'Parallel & Distributed Computing',
                        credits: [3, 0],
                        preRequisite: 'CS2504'
                    },

                    {
                        code: 'CS4111',
                        name: 'Senior Design Project-I',
                        credits: [2, 0],
                        preRequisite: 'SC'
                    },

                    {
                        code: 'N/A',
                        name: 'University Elective-II',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },
                ],
                total: [14, 0] // [FSc/ICS, Med]
            },
            
            {
                name: 'Semester 8',
                id: 'cs-sem-8',
                subjects: [ // credits: [course, lab]
                    {
                        code: 'N/A',
                        name: 'CS Elective-VI',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'CS4406',
                        name: 'Information Security',
                        credits: [3, 0],
                        preRequisite: 'Senior Standing'
                    },

                    {
                        code: 'CS4112',
                        name: 'Senior Design Project-II',
                        credits: [4, 0],
                        preRequisite: 'CS4111'
                    },

                    {
                        code: 'N/A',
                        name: 'University Elective- III',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },

                    {
                        code: 'N/A',
                        name: 'University Elective- IV',
                        credits: [3, 0],
                        preRequisite: 'AS PER SPECIFIC COURSE'
                    },
                ],
                total: [16, 0] // [FSc/ICS, Med]
            },
            
        ])
    }, [])


    const setProgram = (e) => {
        setCurrentProgram(e.target.value);
    }

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
                {/* <div className="banner-image-main-cs">
                    <div className="image-main-cs-first">
                        <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1715848517/case/bs-computer-science-software-dev-scaled_sjknwm.jpg" alt="" />
                    </div>
                    
                    <div className="h2-banner-container-main-cs">
                        <h2>Bachelor's of Computer Science</h2>
                    </div>
                </div> */}

                <div className="head-slogan-cs-page">
                    <h3>
                        "Empowering Tomorrow's Innovators, Equipping Computer 
                        Science Students to Code, Create, and Conquer the Future!"
                    </h3>
                    <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1716138459/case/faculty/cs/sir_jawad_passport_w8ry7g.webp" alt="" />
                </div>

                <h4 className='head-slogan-position'>ChairPerson</h4>
                <h4 className='head-slogan-name'>Dr. Syed Jawad Hussain</h4>

                <h1 className='department-name-main-heading'>Department of Computer Science</h1>
                
                <div className="container-main-line-department">
                    <p className='main-line-department-p'>
                        The Department of Computer Science features a blend of the latest 
                        curriculum, experienced faculty, research opportunities, and 
                        industrial linkages. Our faculty, comprising foreign-qualified 
                        academicians and industry experts, provide invaluable insights 
                        and mentorship. The department’s strong industry partnerships 
                        facilitate internships, job placements, and practical exposure. 
                        We ensure our graduates are not only technically proficient but 
                        also equipped with essential soft skills such as communication, 
                        teamwork, and problem-solving, making them well-prepared to meet 
                        the demands of the evolving IT industry.
                    </p>
                </div>

                <div className="mini-navigation-bar-available-programs-main-page">
                    {
                        Object.entries(programs).map(([iter, curr]) => (
                            <div className='individual-mini-navigation-button-container'>
                                <button value={iter} onClick={setProgram} className='individual-mini-navigation-button'>{iter}</button>
                            </div>
                        ))
                    }
                </div>

                <div className="basic-info-cs">
                    <div className="first-div-basic-info-cs">
                        <div className="program-info-cs-first-div">
                            <h2>
                                Program Info
                            </h2>
                            {/* <p>
                                The program focuses on encouraging students to develop and use abstract models in addition to applying the respective technologies in practical 
                                situations. This program focuses on establishing a strong mathematical foundation, basic aspects of computing, and advanced technical electives 
                                covering areas like Intelligent Systems, Software Engineering & Net-Centric, Data Sciences, Information Security, E‐commerce, and Biomedical.
                            </p> */}
                            <p>{programs[currentProgram].programInfo}</p>
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

                        <div className="scholarships-div-main-page">
                            <h2>
                                Scholarships
                            </h2>
                            <p>
                                We are proud to announce a special scholarship 
                                program dedicated to recognizing and rewarding 
                                the top three students in our class. This 
                                initiative aims to honor their exceptional 
                                academic achievements, unwavering dedication, 
                                and outstanding performance. Each scholarship 
                                will provide financial support to help these 
                                exemplary students pursue their educational 
                                goals and continue their journey toward 
                                academic excellence. We believe in nurturing 
                                talent and encouraging the pursuit of knowledge,
                                and we are excited to support our brightest 
                                students as they strive for future success.
                            </p>
                        </div>

                        <div className="semester-plan-cs">
                            <h2>
                                Semester Plan
                            </h2>

                            <div className="main-container-semester-plan-inner">
                                {
                                    semesters.map(sem => (
                                        <Table semester={sem} />
                                    ))
                                }
                            </div>
                        </div>

                        
                        <div className="peo-plo-cs">
                            <div className="peo-container-cs">
                                <h2>Program Educational Objectives (PEO)</h2>
                                <ol>
                                    <li>
                                        Fundamental Computing Knowledge A graduate who is 
                                        performing his/her professional roles with 
                                        understanding of fundamental computing knowledge 
                                        acquired during his studies.
                                    </li>

                                    <li>
                                        Ethical and Societal Responsibilities A graduate who is 
                                        fulfilling his/her professional responsibilities taking 
                                        into account ethical and societal concerns.
                                    </li>

                                    <li>
                                        Communication Skills A graduate who is effective in 
                                        oral and written communication of technical and 
                                        managerial information.
                                    </li>

                                    <li>
                                        Leadership A graduate who is effective in a 
                                        leadership role of a group/team assigned to him/her 
                                        or in an entrepreneurial environment.
                                    </li>
                                    
                                    <li>
                                        Continuous Improvement A graduate who keeps on 
                                        exploring new fields and areas in computing for 
                                        his/her organization or conduct research for 
                                        academic pursuits.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page