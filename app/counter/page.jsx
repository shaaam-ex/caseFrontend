'use client'

import { useEffect, useRef, useState } from "react";

import './page.css';

export default function Counter() {
    

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

    return(
        <>
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
        </>
    )
}