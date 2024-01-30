import React from 'react'
import Navbar from './Navbar'

const Header = ({children , isShowPin}) => {
  return (
    <div className="max-w-[20rem] h-[716px] ml-auto shadow-custom">
        <Navbar isShowPin={isShowPin}/>
        {children}
    </div>
  )
}

export default Header
