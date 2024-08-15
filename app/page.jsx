import Image from 'next/image';
import Carni from '../public/carni.jpeg';
export default function Home() {
  return (
    <main className='overflow-x-clip'>
      <section id='Hero' className=''>
        <nav className='md:mx-[100px] px-6 lg:px-0 relative backdrop-blur stick top-0 '>
          <div className='flex justify-between md:items-center '>
            <div className='flex  items-center space-x-4'>
              <Image src={'/laboroo.png'} width={150.64} height={109.92} />
              <div className='hidden items-baseline  md:hidden lg:flex lg:gap-x-8 md:font-medium   '>
                <a
                  href='#'
                  className='px-4 py-2 hover:bg-yellow-300 hover:drop-shadow-sm   hover:border-gray-300  hover:rounded-lg  hover:duration-700'
                >
                  Home
                </a>
                <a
                  href='#'
                  className='px-4 py-2 hover:bg-yellow-300 hover:drop-shadow-sm  hover:border-slate-950  hover:rounded-lg  hover:duration-700'
                >
                  Tickets
                </a>
                <a
                  href='#'
                  className='px-4 py-2 hover:bg-yellow-300 hover:drop-shadow-sm  hover:border-slate-950  hover:rounded-lg  hover:duration-700'
                >
                  Merchandize
                </a>
                <a
                  href='#'
                  className='px-4 py-2 hover:bg-yellow-300 hover:drop-shadow-sm  hover:border-slate-950  hover:rounded-lg  hover:duration-700'
                >
                  Events
                </a>
              </div>
            </div>
            <div className='hidden items-baseline  md:hidden lg:flex  lg:gap-x-8 md:font-medium   '>
              <a
                href='#'
                className='px-4 py-2 hover:bg-gray-950 hover:text-gray-50 border-2 text-gray-950 rounded-lg ring-2  ring-slate-950 hover:duration-700'
              >
                Register
              </a>
              <a
                href='#'
                className='px-4 py-2 hover:bg-gray-950 hover:text-gray-50 border-2 text-gray-950  rounded-lg ring-2  ring-slate-950 hover:duration-700'
              >
                login
              </a>
            </div>
          </div>
        </nav>
        
      </section>
      <section className=''>
       
        <div className='  relative flex flex-col top-12 left-12 lg:top-32 lg:left-32 '>
       <h1 className=' text-4xl lg:text-9xl '>Laboro</h1>
        <h2 className='lg:text-2xl text-md tracking-wide w-2/3 lg:w-1/3 '>"Premier Ticketing and Events Hub for Music, Art Festivals, and Rave Experiences"</h2>
        </div>
      </section> 
    </main>
  );
} 
