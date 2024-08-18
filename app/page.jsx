import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <main className='overflow-x-clip'>
      <section id='Hero' className=''>
        <nav className='md:mx-[100px] px-6 lg:px-0 relative backdrop-blur stick top-0 '>
          <div className='flex justify-between md:items-center '>
            <div className='flex  items-center space-x-4'>
              <Image
                src={'/laboroo.png'}
                width={150.64}
                height={109.92}
                alt='logo'
              />
              <div className='hidden items-baseline  md:hidden lg:flex lg:gap-x-8 md:font-medium'>
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
              {/* Mobile Menu */}
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
      <section className=' px-12 lg:px-28 '>
        <div className="flex flex-col relative bg-blend-multiply bg-[url('/carni.jpeg')]  bg-gray-400  px-10 py-32 rounded-2xl drop-shadow-lg">
          <h1 className=' text-white text-4xl lg:text-9xl drop-shadow-xl '>
            La<span className='text-yellow-300'>bo</span>ro
          </h1>
          <h2 className=' relative text-white text-lg lg:text-2xl text-md tracking-wide  lg:w-1/3 '>
            Premier Ticketing and Events Hub for Music, Art Festivals, and Rave
            Experiences
          </h2>
          <div className='py-6'>
            <button className=' relative p-4 rounded-full border-white text-white hover:bg-white hover:text-black hover:duration-700  border-2'>
              Book us
            </button>
          </div>
        </div>
        <div className='flex flex-col mx-auto pb-12'>
          <h1 className='text-2xl py-6'> Just Announced</h1>
          <div className='flex  justify-center lg:justify-start'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4  lg:grid-cols-3 lg:gap-16 *:rounded-lg'>
              <div className=' relative group px-32 py-12 transition-all hover:scale-105 duration:300 '>
                <Image
                  fill
                  src={'/tick/tick.jpeg'}
                  className='rounded-lg'
                  alt='ticket images '
                />
                <div className='absolute bg-opacity-100 bg-white border-b-2 rounded-b-lg px-4 p-2 bottom-0 right-0 left-0 group-hover:opacity-100  duration-500'>
                  <p className='text-red '>Party in the Park</p>
                </div>
              </div>
              {/* 2 */}
              <div className=' relative group px-32 py-12 transition-all hover:scale-105 duration:300 '>
                <Image
                  fill
                  src={'/tick/tick1.jpg'}
                  className='rounded-lg'
                  alt='ticket images '
                />
                <div className='absolute bg-opacity-100 bg-white border-b-2 rounded-b-lg px-4 p-2 bottom-0 right-0 left-0 group-hover:opacity-100  duration-500'>
                  <p className='text-red '>Africa in spain</p>
                </div>
              </div>
              {/* 3 */}
              <div className=' relative group px-32 py-12 transition-all hover:scale-105 duration:300 '>
                <Image
                  fill
                  src={'/tick/tick2.jpg'}
                  className='rounded-lg'
                  alt='ticket images '
                />
                <div className='absolute bg-opacity-100 bg-white border-b-2 rounded-b-lg px-4 p-2 bottom-0 right-0 left-0 group-hover:opacity-100  duration-500'>
                  <p className='text-red '>AfroNation</p>
                </div>
              </div>
              {/* 4 */}
              <div className=' relative group px-32 py-12 transition-all hover:scale-105 duration:300 '>
                <Image
                  fill
                  src={'/tick/tick3.jpeg'}
                  className='rounded-lg'
                  alt='tickets'
                />
                <div className='absolute bg-opacity-100 bg-white border-b-2 rounded-b-lg px-4 p-2 bottom-0 right-0 left-0 group-hover:opacity-100  duration-500'>
                  <p className='text-red '>Afrochella</p>
                </div>
              </div>
              {/* 5*/}
              <div className=' relative group px-32 py-12 transition-all hover:scale-105 duration:300'>
                <Image
                  fill
                  src={'/tick/tick4.jpg'}
                  className='rounded-lg'
                  alt='ticket images '
                />
                <div className='absolute bg-opacity-100 bg-white border-b-2 rounded-b-lg px-4 p-2 bottom-0 right-0 left-0 group-hover:opacity-100  duration-500'>
                  <p className='text-red '>Oseirkom</p>
                </div>
              </div>
              {/* 6 */}
              <div className=' relative group px-32 py-12 bg-black transition-all hover:scale-105 duration:300'>
                <Image
                  fill
                  src={'/tick/tick5.jpg'}
                  className='rounded-lg bg-contain '
                  alt='ticket images '
                />
                <div className='absolute bg-opacity-100 bg-white border-b-2 rounded-b-lg px-4 p-2 bottom-0 right-0 left-0 group-hover:opacity-100  duration-500'>
                  <p className='text-red '>BlackStarLine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* All events */}
        <div className='flex flex-col'>
          <h1 className='rounded-full bg-black text-white px-6 mb-12 justify-center mx-auto '>
            See all events
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4  lg:grid-cols-3 lg:gap-16 *:rounded-lg'>
            <div className='p-4 ring-1 ring-gray-300'>
              <div className='relative p-28 drop-shadow-md transition-all hover:scale-105 duration:300'>
                <Image
                  fill
                  src={'/tick/afro.png'}
                  className='rounded-lg'
                  alt='event images '
                />
              </div>
              <h1 className='py-4'>Afrochella 2024</h1>
              <button className='p-4 flex items-baseline  bg-black text-white rounded-full'>
                Buy tickets
                <div className='px-2'>
                  <ArrowUpRightIcon className='size-4' />
                </div>
              </button>
            </div>
            {/* 2 */}
            <div className='p-4 ring-1 ring-gray-300'>
              <div className='relative p-28 drop-shadow-md transition-all hover:scale-105 duration:300'>
                <Image
                  fill
                  src={'/tick/afro1.jpeg'}
                  className='rounded-lg'
                  alt='event images '
                />
              </div>
              <h1 className='py-4'>Afro Nation 2024</h1>
              <button className='p-4 flex items-baseline  bg-black text-white rounded-full'>
                Buy tickets
                <div className='px-2'>
                  <ArrowUpRightIcon className='size-4' />
                </div>
              </button>
            </div>
            {/* 3 */}
            <div className='p-4 ring-1 ring-gray-300'>
              <div className='relative p-28 drop-shadow-md transition-all hover:scale-105 duration:300'>
                <Image
                  fill
                  src={'/tick/afro2.jpg'}
                  className='rounded-lg'
                  alt='event images '
                />
              </div>
              <h1 className='py-4'>Detty Rave 2024</h1>
              <button className='p-4 flex items-baseline  bg-black text-white rounded-full'>
                Buy tickets
                <div className='px-2'>
                  <ArrowUpRightIcon className='size-4' />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className='flex  my-12 justify-between  space-x-8'>
          {/* 1 */}
          <div className='bg-gray-100 p-4'>
            <iframe
              className=' aspect-video md:aspect-square lg:h-[400px] lg:w-[800px] rounded-lg'
              src='https://www.youtube.com/embed/LpzUpTwIp10'
            ></iframe>
          </div>
          {/* 2 */}
          <div className='rounded-lg hidden  md:flex md:flex-col p-6 bg-gray-100 '>
            <div className='w-1/2'>
              <h1 className='px-2 bg-yellow-200 py-2 text-center  rounded-lg my-3 '>
                On sale this week
              </h1>
            </div>
            <div className='flex  gap-x-4'>
              <div className='w-[200px] h-[100px] bg-white'></div>
              <div className='w-[200px] h-[100px] bg-white'></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
