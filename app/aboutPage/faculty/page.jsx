
'use client'

import { useEffect, useState } from 'react';
import './faculty.css';

const page = () => {
    const [faculty, setFaculty] = useState({});

    const[current, setCurrent] = useState('CS');

    useEffect(() => {
        setFaculty({
            'CS': [
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/DrAyubAlvi-250x250.jpg',
                name: 'Dr. Ayub Alvi',
                position: 'Professor & Vice Chancellor'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/No-Image-Placeholder-250x250.jpg',
                name: 'Dr. Hamood Ur Rehman',
                position: 'Adjunct Assistant Professor'
            },

            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Dr.-Jawad-Hussain-Assoc-Prof.-_-Chairperson--1024x681-200x200.webp',
                name: 'Dr. Jawad Hussain',
                position: 'Assoc Prof & Chairperson'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/dr_shoab-700x680-1-250x250.jpg',
                name: 'Dr. Shoaib Khan',
                position: 'Adjunct Professor & Chancellor'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/No-Image-Placeholder-250x250.jpg',
                name: 'Dr. Yasir Jan',
                position: 'Assistant Professor'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/No-Image-Placeholder-500x500.jpg',
                name: 'Mr. Adeel Shabbir',
                position: 'Adjunct Assistant Professor'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/No-Image-Placeholder-500x500.jpg',
                name: 'Mr. Muhammad Ahmad',
                position: 'Senior Lecturer'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/No-Image-Placeholder-500x500.jpg',
                name: 'Mr. Waqas Ahmed',
                position: 'Senior Lecturer'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Mr.-Abdur-Rehman-Lecturer--250x250.webp',
                name: 'Mr. Abdur Rehman',
                position: 'Lecturer'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Mr.-Akash-Rizvi-Lecturer--250x250.webp',
                name: 'Mr. Akash Rizvi',
                position: 'Lecturer'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Mr.-Hamid-Ashfaq-Lab-Engineer--250x250.webp',
                name: 'Mr. Hamid Ashfaq',
                position: 'Lecturer'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/No-Image-Placeholder-500x500.jpg',
                name: 'Mr. Nouman Asim',
                position: 'Lecturer'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/No-Image-Placeholder-500x500.jpg',
                name: 'Mr. Umer Farooq',
                position: 'Lecturer'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Mr.-Yasir-Ali-Lecturer--250x250.webp',
                name: 'Mr. Yasir Ali',
                position: 'Lecturer'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/No-Image-Placeholder-500x500.jpg',
                name: 'Mr. Zeeshan Aslam',
                position: 'Lecturer'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/No-Image-Placeholder-500x500.jpg',
                name: 'Ms Anam Amjad',
                position: 'Lecturer'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Ms.-Laiba-Zubair-Lecturer--250x250.webp',
                name: 'Ms. Laiba Zubair',
                position: 'Lecturer'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Ms.-Laraib-Javed-Lecturer--250x250.webp',
                name: 'Ms. Laraib Javed',
                position: 'Lecturer'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/No-Image-Placeholder-500x500.jpg',
                name: 'Ms. Saadia Mooqaddas',
                position: 'Senior Lecturer'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Ms.-Mussarat-Fatima-Lecturer--250x250.webp',
                name: 'Ms. Mussarat Fatima',
                position: 'Lecturer '
            },
        ],

        'EE': [
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Dr.-Abdul-Khaliq-Professor-and-Dean-EE--250x250.webp',
                name: 'Dr. Abdul Khaliq',
                position: 'Professor and Dean'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Dr.-Asif-Mughal-Adjunct-Assistant-Professor-250x250.png',
                name: 'Dr. Asif Mehmood',
                position: 'Assistant Professor'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Dr.-Mian-Jehanzeb-Assistant-Professor-250x250.png',
                name: 'Dr. Jehanzeb',
                position: 'Assistant professor & HoD'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Mr.-Ejaz-Naveed-Senior-Lecturer-250x250.jpeg',
                name: 'Mr. Ejaz Naveed',
                position: 'Senior Lecturer'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Mr.-Muhammad-Ishaq-Senior-Lecturer--250x250.webp',
                name: 'Mr. Muhammad Ishaq',
                position: 'Senior Lecturer'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Mr-Safdar-Munir-Lab-Engineer-250x250.png',
                name: 'Mr. Safdar Munir',
                position: 'Lab Engineer'
            },
            
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Ms.-Laiba-Tanveer-Lab-Engineer-1010x1024-200x200.webp',
                name: 'Ms. Laiba Tanveer',
                position: 'Lab Engineer'
            },

        ]
    })
    }, [])

    const updateCurrent = (e) => {
        setCurrent(e.target.value);
    }

    return (
        <>
            <head>
                <link rel="canonical" href="https://case.exton-cs.me/aboutPage/faculty" />
                <title>Faculty - Sir Syed CASE Institute of Technology </title>
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

            <div className="outer-container-faculty-page">
                <div className="main-container-faculty-page">
                    
                    <div className="inner-container-faculty-page">
                        <h1>Our Faculty</h1>
                
                        <div className="input-faculty-div">
                            <h3>Select Department</h3>
                
                            <select className='input-faculty-page' name="input-faculty" id="input-faculty"  onChange={updateCurrent}>
                                <option value="CS">Computer Science</option>
                                <option value="EE">Electrical Engineering</option>
                                <option value="management-sciences">Management sciences</option>
                            </select>
                        </div>

                    </div>

                    <div className="main-faculty-display-faculty-page">
                        {
                            faculty[current] && faculty[current].map(curr => (
                                <div className='individual-teacher-card-faculty-page'>
                                    <img src={curr.img} alt="" />
                                    <h4>{curr.name}</h4>
                                    <p>{curr.position}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default page