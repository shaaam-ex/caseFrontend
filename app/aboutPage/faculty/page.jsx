
'use client'

import { useEffect, useState } from 'react';
import './faculty.css';

const page = () => {
    const [faculty, setFaculty] = useState([]);

    useEffect(() => {
        setFaculty([
            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/05/DrAyubAlvi-250x250.jpg',
                name: 'Dr. Ayub Alvi',
                position: 'Professor & Vice Chancellor'
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
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Mr.-Abdur-Rehman-Lecturer--250x250.webp',
                name: 'Mr. Abdur Rehman Lecturer',
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
                position: 'Lab Engineer'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Mr.-Muhammad-Riaz-Senior-Lecturer--250x250.webp',
                name: 'Mr. Muhammad Riaz',
                position: 'Senior Lecturer'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Mr.-Yasir-Ali-Lecturer--250x250.webp',
                name: 'Mr. Yasir Ali',
                position: 'Lecturer'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Ms.-Laiba-Zubair-Lecturer--250x250.webp',
                name: 'Ms. Laiba Zubair',
                position: 'Lecturer'
            },

            {
                img: 'https://case.edu.pk/wp-content/uploads/2023/06/Ms.-Mussarat-Fatima-Lecturer--250x250.webp',
                name: 'Ms. Mussarat Fatima',
                position: 'Lecturer '
            },
        ])
    }, [])

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
                    <h1>Our Faculty</h1>
                
                    <div className="input-faculty-div">
                        <h3>Select Department</h3>
                    
                        <select name="input-faculty" id="input-faculty">
                            <option value="ComputerScience">Computer Science</option>
                            <option value="BSEE">Electrical Engineering</option>
                            <option value="BBA">BBA</option>
                        </select>
                    </div>

                    <div className="main-faculty-display-faculty-page">
                    </div>
                </div>
            </div>
        </>
    )
}

export default page