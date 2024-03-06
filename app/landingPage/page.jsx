
'use client'

import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './landingPage.css';
import Link from 'next/link';

import { CiCircleChevDown } from "react-icons/ci";
import WelcomeCard from '../layouts/welcomeCard/welcomeCard';
import { useEffect, useRef, useState } from 'react';



export default function LandingPage() {

    // Counter Login for graduates and awards

    // Counter
    const [count, setCount] = useState([0, 0, 0, 0]);

    // Counter Limit
    const [limit, setLimit] = useState([1750, 2143, 71, 11]);

    const [counterVisible, setCounterVisible] = useState(false);

    const [limitUpdate, setLimitUpdate] = useState(false);

    const triggerCounter = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            setCounterVisible(entry.isIntersecting);
        })

        observer.observe(triggerCounter.current)
    }, [])


    useEffect(() => {
        if (!limitUpdate && counterVisible) {
            updateCount();
        }
    }, [counterVisible])

    const updateCount = () => {
        count.forEach((curr, index) => {
            if (count[index] < limit[index]) {
                let duration = Math.floor(500 / limit[index]);
    
                let counter = setInterval(function () {
                    setCount(prevCount => {
                        let newCount = [...prevCount];
                        
                        if(limit[index] - newCount[index] >= 500) {
                            newCount[index] += 30;
                        }

                        else {
                            newCount[index] += 1;
                        }

                        if(newCount[index] === limit[index]) {
                            clearInterval(counter);
                        }

                        return newCount;
                    })
                }, duration)
            }
        });
    
        setLimitUpdate(true);
    };
    
    

    return (
        <>
            <div className="main-container-landing-page">
                <title>HOME | Sir Syed CASE Institute of Technology</title>
                <meta name="description" content="Sir Syed CASE Institute Of Technology clone, developed by NOTAHTI123" />

                <meta name="google-site-verification" content="E65Gsomi0gWK7-xcK9u0MDmE7bMNtorAforbhdLxMk0" />
                
                <div className="first-carousel-container-landing-page">
                    <Swiper
                        pagination={true}
                        modules={[Pagination, Autoplay, Navigation]}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        speed={1200}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            enabled: true,
                        }}
                    >
                    <button className="swiper-button-prev"></button>
                        <SwiperSlide className='main-carousel-standard hamburger-menu-button-headerfirst-slide-admissions-first-carousel'>
                            <img src="https://www.case.edu.pk/wp-content/uploads/2023/06/admission.webp" alt="" />
                            <div className="banners-first-slide-admissions banner-container-first-carousel">
                                <div className="first-banner-admissions standard-banner-medium">
                                    <h2 className='h2-banner-standard'>Admissions Open</h2>
                                    <h3 className='h3-banner-standard'><a href="#">HOSTEL</a> and <a href="#">TRANSPORT</a></h3>
                                    <h3 className='h3-banner-standard'>AVAILABLE</h3>
                                    <h3 className='h3-banner-standard'><a href="#">Click here for degree programs</a></h3>
                                    <Link id='testbutton' className='standard-button-banner-medium standard-button' href={'#'}>Apply Now</Link>
                                </div>

                                <div className="second-banner-admissions standard-banner-medium">
                                    <h2 className='h2-banner-standard'>1st Convocation</h2>
                                    <h3 className='h3-banner-standard'><span>On 9th March, 2024</span></h3>
                                    <Link className='standard-button-banner-medium standard-button' href={'#'}>Apply Now</Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='main-carousel-standard second-slide-main-carousel'>
                            <img src="https://www.case.edu.pk/wp-content/uploads/2023/06/CASE-University.webp" alt="" />
                            <div className="banners-second-slide-admissions banner-container-second-carousel">
                                <img src="https://www.case.edu.pk/wp-content/uploads/2023/05/case-logo-lg-copy-1-150x150.png" alt="" />
                                    <h2 className='h2-banner-standard'>Sir Syed CASE Institute of Technology Islamabad</h2>
                                    <h3 className='h3-banner-standard'>
                                        We offer undergraduate degree programs in Electrical Engineering, Computer Engineering, 
                                        Business Administration, Accounting and Finance, Computer Science, Software Engineering,
                                        Artificial Intelligence, Cyber Security and English. We offer post graduate degree programs
                                        in Electrical Engineering, Computer Science, Engineering Management, Project Management and
                                        Mathematics.
                                    </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='main-carousel-standard third-slide-main-carousel'>
                            <img src="https://www.case.edu.pk/wp-content/uploads/2023/06/c-manag-4.webp" alt="" />
                            <div className="banner-container-third-carousel">
                                <h2 className='h2-banner-standard'>CASE</h2>
                                <h3 className='h3-banner-standard'>A glimpse of our competitive history</h3>
                                <h3 className='h3-banner-standard'>Winner APICTA (Asia Pacific ICT Alliance) awards multiple times</h3>
                            </div>
                        </SwiperSlide>

                    <button className="swiper-button-next"></button>
                    </Swiper>
                </div>

                <div className="second-container-arrow-down">
                    <Link className='arrow-down-button' href={'#welcome-section'}><CiCircleChevDown className='arrow-down-svg' /></Link>
                </div>

                <div id='welcome-section'>
                    <h1>Welcome</h1>

                    <div className="container-inner-welcome-section">
                        <div className="left-div-welcome-section">
                            <WelcomeCard 
                                img='https://www.case.edu.pk/wp-content/uploads/2023/06/case-study.png'
                                name='Studying at CASE'
                                details='Find out about learning and about the CASE campuses.'
                            />
                            <WelcomeCard 
                                img='https://www.case.edu.pk/wp-content/uploads/2023/06/degree-programs.png'
                                name='Degree Programs'
                                details='Get information to help you study in Pakistan at CASE in 2024.'
                            />
                            <WelcomeCard 
                                img='https://www.case.edu.pk/wp-content/uploads/2023/06/Societies-and-Clubs.png'
                                name='Societies and Clubs'
                                details='Student Societies Various clubs and societies have been formulated.'
                            />
                        </div>
                    </div>

                    <div className="slogan-div-welcome-section">
                            <h3>
                                &quot;At CASE we’re here to help you find your passion and equip you 
                                with the skills to launch your career in a field that inspires 
                                you.&quot;
                            </h3>
                    </div>
                </div>

                <div ref={triggerCounter} className="counter-section-landing-page">
                    <div className="second-div-counter-section-landing-page">
                        <div className="graduates-container-counter-section">
                            <h2>Bachelor's Graduates</h2>
                            <h1>{count[0]} +</h1>
                        </div>

                        <div className="graduates-container-counter-section">
                            <h2>Master's Graduates</h2>
                            <h1>{count[1]} +</h1>
                        </div>

                        <div className="graduates-container-counter-section">
                            <h2>PhD Graduates</h2>
                            <h1>{count[2]} +</h1>
                        </div>

                        <div className="graduates-container-counter-section">
                            <h2>Awards</h2>
                            <h1>{count[3]} +</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}