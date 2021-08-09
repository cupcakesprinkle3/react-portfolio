import React from 'react';
import "./about.scss"
import { useEffect, useRef } from 'react';
import { init } from 'ityped'


function About() {
    const textRef = useRef();

    useEffect (()=>{
       init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["marketer", "leader", "full stack developer", "badass"],   
       });

    }, []);

    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/MichelleBrinich-headshot-copy.jpeg" alt="miche b pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Michelle Brinich</h1>
                    <h3>Open source <span ref={textRef}></span></h3>
                    <p>Having worked at Yugabyte, Red Hat, NGINX, Okta, and now Deepfence, Michelle Brinich is well versed in the software industry, with nearly 20 years of experience in building open source companies and communities. She has a proven track record for leading projects and programs of all types.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;