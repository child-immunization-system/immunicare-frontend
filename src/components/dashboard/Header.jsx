import search from '../../assets/search.png'
import notify from '../../assets/notify.png'
import pic from '../../assets/pic1.png'
import arrow from '../../assets/arrow.png'

const Header = () => {
  return (
    <header className='flex justify-between items-center rounded py-2 px-4 bg-white'>

      <div className='flex items-center rounded py-2 px-6 w-4/12' style={{backgroundColor: 'hsla(241, 100%, 60%, 0.1)'}}>
        <img src={search} alt='' className='' style={{width: '8%'}} />
        <input type='text' placeholder='Search' className='flex border-none outline-none bg-transparent ml-2' />
      </div>

      <section className='flex justify-between items-center w-1/5'>

        <img src={notify} alt='' className='' style={{width: '10%'}} />

        <div className='flex justify-between items-center w-2/4'>

          <img src={pic} alt='' className='' style={{width: '25%'}} />

          <div className='flex flex-col text-left'>
            <p className='font-bold text-sm'>Deonaid!</p>
            <p className='text-xs font-normal' style={{color: 'hsla(241, 100%, 60%, 1)', marginTop: '-5px'}}>@deonaid</p>
          </div>

        </div>

        <img src={arrow} alt='' className='' style={{width: '6%'}} />

      </section>

    </header>
  )
}

export {Header}