
const HowItWorks = ({ image, heading, content, divid }) => {
  return (
    <div className='flex flex-col justify-center items-center rounded-sm py-4 h-60' id={divid}>
        <img src={image} alt='img' className='' />
        <h1 className='font-bold mt-2 text-center' style={{width: '70%'}}>{heading}</h1>
        <p className='mt-2 text-center text-sm' style={{width: '90%'}}>{content}</p>
    </div>
  )
}

export default HowItWorks