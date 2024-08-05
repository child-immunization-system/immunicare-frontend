import hand from '../../assets/hand.png'
import image from '../../assets/doctor.png'

const Dashmain = () => {

    const userData = localStorage.getItem('user-info');
    const userdetail = JSON.parse(userData);
    const name = userdetail.data.first_name

  return (
    <div className="flex flex-col" style={{width: '63%'}}>

        <header className='flex justify-between px-4 bg-white rounded-md' style={{boxShadow: '-2px 5px 20px 0px hsla(0, 0%, 0%, 0.3)'}}>

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

        <section className='flex justify-between items-center mt-4'>

            <div className='flex  justify-between items-center rounded-md text-white bg-[#1B854A] w-[30%] h-[110px] px-2 py-3'>

                <h1 className='flex justify-center items-center font-semibold text-4xl w-[30%] border-4 border-white rounded-[50%] p-1'>3</h1>

                <div className='flex flex-col w-[60%] '>
                    <p className='capitalize font-semibold'>completed vaccines</p>
                    <p className='text-xs font-normal'>shot administered and up-to-date.</p>
                </div>

            </div>

            <div className='flex  justify-between items-center rounded-md text-white bg-[#7976FF] w-[30%] h-[110px] px-2 py-3'>

                <h1 className='flex justify-center items-center font-semibold text-4xl w-[30%] border-4 border-white rounded-[50%] p-1'>2</h1>

                <div className='flex flex-col w-[60%] '>
                    <p className='capitalize font-semibold'>overdue vaccines</p>
                    <p className='text-xs font-normal'>shot is overdue & needs scheduling.</p>
                </div>

            </div>

            <div className='flex  justify-between items-center rounded-md text-white bg-[#3632FF] w-[30%] h-[110px] px-2 py-3'>

                <h1 className='flex justify-center items-center font-semibold text-4xl w-[30%] border-4 border-white rounded-[50%] p-1'>6</h1>

                <div className='flex flex-col w-[60%] '>
                    <p className='capitalize font-semibold'>upcoming vaccines</p>
                    <p className='text-xs font-normal'>shots approaching your timeframe.</p>
                </div>

            </div>

        </section>

    </div>
  )
}

export {Dashmain}