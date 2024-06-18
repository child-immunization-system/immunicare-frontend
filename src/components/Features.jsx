import React from 'react'

const Features = ({ featureimg, featureheading, featurecontent, featuredivid }) => {
  return (
    <div className='flex bg-white justify-between items-center p-4 rounded-sm mt-2' id={featuredivid}>

        <img src={featureimg} alt='img' className='' style={{width: '10%'}} />

        <div className='flex flex-col ml-4'>
            <h1 className='font-bold'>{featureheading}</h1>
            <p className='text-sm font-semibold'>{featurecontent}</p>
        </div>

    </div>
  )
}

export default Features