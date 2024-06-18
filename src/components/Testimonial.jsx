import React from 'react'
import { Avatar, Blockquote, Rating, RatingStar } from "flowbite-react";
import img from '../assets/pic.png'

const Testimonial = () => {
  return (
    <figure className="max-w-screen-md p-8 rounded-md" style={{width: '30%', backgroundColor: '#fff', boxShadow: '0px 0px 60px 2px hsla(238, 81%, 76%, 0.1)'}}>

      <div className="mb-4 flex items-center">
        <Rating size="md">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </Rating>
      </div>

      <Blockquote>
        <p className="text-sm font-medium text-gray-900 dark:text-white">
            This platform has made it so easy to keep track of my child’s vaccinations. I never miss an appointment now!
        </p>
      </Blockquote>

      <figcaption className="mt-6 flex items-center space-x-3">

        <Avatar rounded size="md" img={img} alt="profile picture" />
        <div className="flex flex-col">
          <p className="font-bold text-lg text-gray-900 dark:text-white">Sarah P.</p>
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400">Digital Marketer</p>
        </div>

      </figcaption>

    </figure>
  )
}

export default Testimonial