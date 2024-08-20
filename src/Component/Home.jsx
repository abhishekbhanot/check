import React from 'react'
import image1 from '../Images/WhatsApp Image 2024-08-10 at 1.03.11 PM.jpeg'
import one from '../Images/core1.jpg'
import two from '../Images/core2.jpg'
import three from '../Images/core3.jpg'
import four from '../Images/core4.jpg'
import five from '../Images/DALL·E 2024-08-14 13.11.50 - A modern and sleek landing page design in a Figma layout, featuring icons and logos of various technologies like HTML, CSS, JavaScript, Python, Java, .webp'
import six from '../Images/women.jpg'
import seven from '../Images/elect.jpg'
import eight from '../Images/stich.webp'
import nine from '../Images/jcbb.jpg'

export default function Home() {
  return (
  <>
  <div id='secimage'>
    <img id='mcm' src={image1} alt=''/>
    <main> </main>

  </div>
{/* first */}
<div id="iconsdiv">
            <p id="core">Core Values</p>
            <p id="firstline">"though there is a commitment by the god in the gita that if what your desire is backed </p>
            <p id="secondline">by noble intention and pursed through the path of dharma it will be granted"
            </p>
            <div id="smallimages">
                <img src={one}  alt='' id="icons"/>
                <img src={two} alt='' id="icons"/>
                <img src={three} alt='' id="icons"/>
                <img src={four} alt='' id="icons"/>

            </div>
            <div id="textflex">
                <p id="">Value for Customers</p>
                <p id="">Quality Service</p>
                <p id="">Trust and Passion</p>
                <p id="">Accountability</p>
            </div>
        </div> 
{/* course div */}
 <section class="courses-section">
        <h1>Our Courses</h1>
        <div class="courses-container">
            <div class="course-card">
                <img src={five} alt="Course 1 Image"/>
                <h2>Course 1:Full-Stack Web Development</h2>
                <p>Learn the basics of web development, including HTML, CSS, and JavaScript.</p>
                <a href="#">Learn More</a>
            </div>
            <div class="course-card">
                <img src={seven} alt="Course 2 Image"/>
                <h2>Course 2: Electriccian</h2>
                <p>Understand the fundamentals of data analysis, machine learning, and AI.</p>
                <a href="#">Learn More</a>
            </div>
            <div class="course-card">
                <img src={six} alt="Course 3 Image"/>
                <h2>Course 3: Beauty and Wellnesss</h2>
                <p>Master the skills of SEO, social media marketing, and online advertising.</p>
                <a href="#">Learn More</a>
            </div>
            <div class="course-card">
                <img src={eight} alt="Course 4 Image"/>
                <h2>Course 4: Stiching & Tailoring designing</h2>
                <p>Explore the world of creative design with tools like Photoshop and Illustrator.</p>
                <a href="#">Learn More</a>
            </div>
            <div class="course-card">
                <img src={nine} alt="Course 5 Image"/>
                <h2>Course 5: JCB Operator</h2>
                <p>Learn how to protect systems and networks from cyber threats.</p>
                <a href="#">Learn More</a>
            </div>
        </div>
    </section>
    {/* next div */}

  </>
  )
}
