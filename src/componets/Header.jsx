import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'

function Header() {

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [])

  const NavLink = ({ title = "" }) => (
    <LinkScroll onClick={()=>setIsOpen(false)} offset={-100} spy smooth to={title} className='base-bold text-p4 uppercase 
    transition-colors duration-500  
    cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5' activeClass='nav-active'>
      {title}
    </LinkScroll>
  )


  return (
    <header className={clsx('fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4', hasScrolled && 'py-2 bg-black-100/40 backdrop-blur-[8px]')}>
      <div className='container flex max-lg:px-5'>
        <a href="" className='lg:hidden flex-1 z-2 cursor-pointer'>
          <img src="/images/xora.svg" alt="Logo" width={115} height={55} />
        </a>

        <div className={clsx(`w-full max-lg:fixed max-lg:top-0 
          max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0`,
          isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none")}>

          <div className='max-lg:relative max-lg:flex 
        max-lg:flex-col max-lg:min-h-screen max-lg:overflow-hidden sidebar-before max-md:px-4'>

            <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
              <ul className='flex max-lg:block max-lg:px-12'>

                <li className='nav-li'>
                  <NavLink title="features" />
                  <div className='dot' />
                  <NavLink title={"Pricing"} />
                </li>

                <li className='nav-logo'>
                  <LinkScroll to='hero' offset={-250} spy smooth className={clsx('max-lg:hidden transition-transform duration-500 cursor-pointer')}>
                    <img src="/images/xora.svg" alt="Xora" width={160} height={55} />
                  </LinkScroll>
                </li>

                <li className='nav-li'>
                  <NavLink title="F&Q" />
                  <div className='dot' />
                  <NavLink title={"Downloads"} />
                </li>

              </ul>
            </nav>

            <div className='lg:hidden block absolute top-1/2 left-0 w-[960] h-[380px] translate-x-[-150px] -translate-y-1/2 rotate-90'>
              <img src="/images/bg-outlines.svg" alt="outline" width={960} height={380} className='z-2 relative' />
              <img src="/images/bg-outlines-fill.png" alt="outline" width={960} height={380} className='absolute inset-0 mix-blend-soft-light opacity-15' />
            </div>

          </div>
        </div>

        <button className='lg:hidden z-2 size-10 border-2
         border-s4/25 rounded-full flex justify-center items-center'>
          <img src={`/images/${isOpen ? 'close' : 'magic'}.svg`} alt="sidebar-btn"
            className='size-1/2 object-contain'
            onClick={() => setIsOpen((prev) => !prev)} />
        </button>
      </div>
    </header>
  )
}

export default Header