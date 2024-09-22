import React from 'react'

function Header() {
  return (
    <header className='fixed top-0 left-0 z-50 w-full'>
        <div>
            <a href="">
                <img src="/images/xora.svg" alt="Logo" width={115} height={55} />
            </a>
        </div>
    </header>
  )
}

export default Header