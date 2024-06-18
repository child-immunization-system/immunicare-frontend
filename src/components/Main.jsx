import React from 'react'
import img from '../assets/hero.png'
import HowItWorks from './HowItWorks'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import hero from '../assets/hero1.svg'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/heart.png'
import img10 from '../assets/check.png'
import img11 from '../assets/lock.png'
import img12 from '../assets/bulb.png'
import img13 from '../assets/card.png'
import img14 from '../assets/Vector1.png'
import Features from './Features'
import Testimonial from './Testimonial'

const Main = () => {
  return (
    <div className='flex flex-col'>

      <section className='hero flex justify-between items-center m-auto mt-8' style={{width: '90%'}}>

        <aside className='flex flex-col w-2/5'>

          <h1 className='font-bold text-5xl'>Ensure Your Child's Health with <span style={{color: '#3632ff'}}>Timely</span> Vaccinations</h1>

          <p className='text-md mt-4 w-4/5'>Effortlessly track immunization schedules, receive timely reminders, and maintain digital records with our user-friendly platform</p>

          <div className='flex justify-between items-center w-3/5 mt-4' style={{width: ''}}>
              <button style={{backgroundColor: '#3632ff'}} className='flex justify-center items-center rounded-md text-white px-8 py-2'> 
                  Sign Up 
              </button>
              <button style={{border: '1px solid #3632ff', color: '#3632ff'}} className='flex justify-center items-center rounded-md px-8 py-2 font-bold'> 
                  Sign In 
              </button>
          </div>

        </aside>

        <img src={img} alt='' className='flex w-3/5' />
            
      </section>

      <section className='flex flex-col'>

        <div className='top flex flex-col justify-center items-center py-4' style={{backgroundColor: '#D4F4E2'}}>
          <h1 className='font-bold text-2xl'>How It Works</h1>
          <p className=''>Learn how Immunicare works so as to maximize it’s benefits</p>
        </div>

        <section className='bot flex justify-between items-center m-auto mt-4' style={{width: '90%'}}>

          <HowItWorks image={img1} heading="Sign Up and Create a Profile"
            content="Quickly sign up and create profiles for your children to start tracking their immunizations."
            divid="id1"
          />

          <HowItWorks image={img2} heading="Add Your Child's Details"
            content="Enter essential details about your child to personalize their immunization schedule"
            divid="id2"
          />

          <HowItWorks image={img3} heading="Track Immunization Schedules"
            content="View and manage upcoming and past vaccinations with ease."
            divid="id3"
          />

          <HowItWorks image={img4} heading="Receive Timely Reminders"
            content="Never miss a vaccination with our timely reminders sent directly to your device."
            divid="id4"
          />

        </section>

      </section>

      <section className='flex flex-col mt-8 py-4' style={{backgroundColor: 'hsla(241, 100%, 67%, 1)'}}>

        <div className='flex flex-col justify-center items-center text-white'>
          <h1 className='font-bold text-2xl'>Features</h1>
          <p className=''>Simplifying Child Immunization Management</p>
        </div>

        <section className='flex justify-around items-center'>

          <img src={hero} alt='' className='flex w-2/5' />

          <aside className='flex flex-col w-2/5'>

            <Features featureimg={img5} featureheading="Digital Records"
              featurecontent="Our platform offers a digital record-keeping system that is easy to access and update."
              featuredivid=""
            />

            <Features featureimg={img6} featureheading="User-Friendly Interface"
              featurecontent="Whether you’re a tech-savvy parent or someone less familiar with digital tools, our user-friendly interface ensures a smooth experience"
              featuredivid=""
            />

            <Features featureimg={img7} featureheading="Educational Resources"
              featurecontent="Learn about the importance of each vaccine, potential side effects, and the diseases they prevent."
              featuredivid=""
            />

            <Features featureimg={img8} featureheading="Track Immunization Schedules"
              featurecontent="Keep track of all your child’s immunization schedules in one place."
              featuredivid=""
            />

          </aside>

        </section>
        
      </section>

      <section className='flex flex-col' style={{backgroundColor: 'hsla(0, 0%, 100%, 1)'}}>

        <div className='top flex flex-col justify-center items-center py-4' style={{backgroundColor: '#D4F4E2'}}>
          <h1 className='font-bold text-2xl'>Benefits</h1>
          <p className=''>Why Choose Our Platform?</p>
        </div>

        <section className='bot flex justify-between items-center m-auto mt-4' style={{width: '90%'}}>

          <HowItWorks image={img9} heading="Improved Health Outcomes"
            content="Timely vaccinations play a critical role in safeguarding your child from various potentially severe and life-threatening diseases."
            divid="id5"
          />

          <HowItWorks image={img10} heading="Peace of Mind for Parents"
            content="Never miss an important vaccination date, ensuring your child stays protected. Our system keeps you updated with timely notifications and easy-to-access records for peace of mind"
            divid="id6"
          />

          <HowItWorks image={img11} heading="Secure and Confidential"
            content="Your data is protected with the highest standards of security and confidentiality. We use advanced encryption to safeguard your information, ensuring it remains private"
            divid="id7"
          />

        </section>

        <section className='bot flex justify-between items-center m-auto mt-4' style={{width: '90%'}}>

          <HowItWorks image={img12} heading="Educational Resources"
            content="Access a wealth of information to stay informed about vaccines, their benefits, and potential side effects."
            divid="id5"
          />

          <HowItWorks image={img13} heading="Easy Access Anytime"
            content="Manage and review immunization records on the go, anywhere and anytime with our user -friendly platform."
            divid="id8"
          />

          <HowItWorks image={img14} heading="Personalized Health Tips"
            content="Receive tailored health tips and advice based on your child's vaccination schedule and health profile."
            divid="id7"
          />

        </section>

      </section>

      <section className='flex flex-col mt-8' style={{backgroundColor: 'hsla(0, 0%, 98%, 1)'}}>

        <div className='top flex flex-col justify-center items-center py-4' style={{backgroundColor: '#D4F4E2'}}>
          <h1 className='font-bold text-2xl'>Testimonials</h1>
          <p className=''>What People say about us</p>
        </div>

        <div className='flex justify-between items-center m-auto mt-8 mb-8' style={{width: '90%'}}>

          <Testimonial />
          <Testimonial />
          <Testimonial />

        </div>
        
      </section>

      <section className='flex flex-col justify-center items-center text-center py-8 text-white' style={{backgroundColor: 'hsla(241, 100%, 67%, 1)'}}>

        <h1 className='font-medium text-2xl'>Ready to Get Started?</h1>

        <p className='text-xl'>Join us in protecting children's health</p>

        <button className='mt-8 bg-white text-blue-800 font-medium text-sm rounded-md px-8 py-2'>Sign Up Now!</button>

      </section>
        
    </div>
  )
}

export default Main