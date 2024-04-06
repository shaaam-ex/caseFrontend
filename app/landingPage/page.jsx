
'use client'

import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './landingPage.css';
import Link from 'next/link';

import { CiCircleChevDown, CiCircleChevLeft, CiCircleChevRight  } from "react-icons/ci";
import { RiMegaphoneLine } from "react-icons/ri";

import WelcomeCard from '../layouts/welcomeCard/welcomeCard';
import { useEffect, useRef, useState } from 'react';
import Counter from '../counter/page';

import { Head } from 'next/head';

export default function LandingPage() {
    return (
        <>
            <div className="main-container-landing-page">
                
                <head>
                    <link rel="canonical" href="https://case.exton-cs.me/landingpage" />
                    <title>Sir Syed CASE Institute of Technology - Home </title>
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

                <Link className='clickable-announcements-popup' href='/announcements'>
                    <div className="announcements-pop-up-menu-landing-page">
                            <RiMegaphoneLine className='megaphone-icon-landing-page' />
                            <p>Announcements</p>
                    </div>
                </Link>

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

                    <div className="second-carousel-offered-programs-landing-page">
                        <button className="swiper-button-prev-second"><CiCircleChevLeft /></button>
                        <Swiper
                            pagination={true}
                            modules={[Pagination, Autoplay, Navigation]}
                            // autoplay={{
                            //     delay: 4500,
                            //     disableOnInteraction: false,
                            //     pauseOnMouseEnter: true,
                            // }}
                            // speed={1200}
                            navigation={{
                                nextEl: '.swiper-button-next-second',
                                prevEl: '.swiper-button-prev-second',
                                enabled: true,
                            }}
                            slidesPerView={2}
                            spaceBetween={30}

                            className='second-carousel-container'
                            
                            breakpoints={{
                                1200: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },

                                330: {
                                    slidesPerView: 1,
                                }
                            }}
                        >
                            <SwiperSlide className='swiper-card-second-carousel-parent'>
                                <div className="swiper-card-second-carousel-container">
                                    <div className="first-inner-container-swiper-card-second">
                                        <img src="https://case.edu.pk/wp-content/uploads/2023/06/computer-science.webp" alt="" />
                                    </div>

                                    <div className="second-inner-container-swiper-card-second">
                                        <h1>Department of Computer Science</h1>
                                        <p>Prepare future Computer Scientists to achieve excellence in the core competencies of computer science that enable them to effectively</p>

                                        <Link className='view-details-button-second-carousel' href={'/computerScience'}>View Details</Link>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='swiper-card-second-carousel-parent'>
                                <div className="swiper-card-second-carousel-container">
                                    <div className="first-inner-container-swiper-card-second">
                                        <img src="https://case.edu.pk/wp-content/uploads/2023/06/dept-ee.webp" alt="" />
                                    </div>
                                    
                                    <div className="second-inner-container-swiper-card-second">
                                        <h1>Department of Electrical Engineering</h1>
                                        <p>The Electrical And Computer Engineering Department At SS-CASE-IT Offers Interesting And Challenging Career Paths For Our Future Engineers.</p>
                                        
                                        <Link className='view-details-button-second-carousel' href={'/computerScience'}>View Details</Link>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='swiper-card-second-carousel-parent'>
                                <div className="swiper-card-second-carousel-container">
                                    <div className="first-inner-container-swiper-card-second">
                                        <img src="https://case.edu.pk/wp-content/uploads/2023/06/c-manag.webp" alt="" />
                                    </div>
                                    
                                    <div className="second-inner-container-swiper-card-second">
                                        <h1>Department of Management Sciences</h1>
                                        <p>Welcome to one of the best management degree programs that provide state-of-the-art education in the field of Management.</p>
                                        
                                        <Link className='view-details-button-second-carousel' href={'/computerScience'}>View Details</Link>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='swiper-card-second-carousel-parent'>
                                <div className="swiper-card-second-carousel-container">
                                    <div className="first-inner-container-swiper-card-second">
                                        <img src="https://case.edu.pk/wp-content/uploads/2023/06/sh.webp" alt="" />
                                    </div>
                                    
                                    <div className="second-inner-container-swiper-card-second">
                                        <h1>Department of Sciences and Humanities</h1>
                                        <p>Welcome to one of the best management degree programs that provide state-of-the-art education in the field of Management.</p>
                                        
                                        <Link className='view-details-button-second-carousel' href={'/computerScience'}>View Details</Link>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='swiper-card-second-carousel-parent'>
                                <div className="swiper-card-second-carousel-container">
                                    <div className="first-inner-container-swiper-card-second">
                                        <img src="https://case.edu.pk/wp-content/uploads/2024/02/MedicalImg.png" alt="" />
                                    </div>
                                    
                                    <div className="second-inner-container-swiper-card-second">
                                        <h1>Department of Allied Medical and Health Sciences</h1>
                                        <p>Transformative journey towards a rewarding career in the health sciences in Pakistan and abroad.</p>
                                        
                                        <Link className='view-details-button-second-carousel' href={'/computerScience'}>View Details</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <button className="swiper-button-next-second"><CiCircleChevRight /></button>
                    </div>
                </div>

                <Counter />
            </div>
        </>
    )
}