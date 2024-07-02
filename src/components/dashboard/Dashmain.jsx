import hand from '../../assets/hand.png'
import image from '../../assets/doctor.png'

const Dashmain = () => {

    const userData = localStorage.getItem('user-info');
    const userdetail = JSON.parse(userData);
    const name = userdetail.data.first_name

  return (
    <div className="flex flex-col" style={{width: '63%'}}>

        <header className='flex justify-between px-4 bg-white' style={{boxShadow: '-2px 5px 20px 0px hsla(0, 0%, 0%, 0.3)'}}>

            <div className='flex flex-col mt-4 w-2/4'>
                <span className='flex items-center font-bold text-2xl capitalize' style={{color: 'hsla(241, 100%, 60%, 1)'}}>
                    Welcome {name}!
                    <img src={hand} alt='' className='ml-1' style={{width: '10%'}} />
                </span>
                <p className='text-sm font-semibold mt-4'>Stay Informed:  Keep yourself updated on the latest vaccination schedules and 
                    recommendations from reliable sources such as the CDC and WHO.
                </p>
            </div>

            <img src={image} alt='' className='' style={{width: '30%'}} />

        </header>

    </div>
  )
}

export {Dashmain}