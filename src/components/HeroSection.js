import React from 'react';
import'../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
	return (
		<div className='hero-container'>
			<video src = "/videos/video-1.mp4" autoPlay loop muted />
			<h1>Adventure Awaits<br></br>(WHERE YOU GIVE ME JOB)</h1>
			<p>More updates coming soon so you give me a job</p>
			<div className='hero-btns'>
				<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            KEWL Thing so you give me job
				</Button>
				<Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            KEWL Thing(but in video format) <i className='far fa-play-circle'/>
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
