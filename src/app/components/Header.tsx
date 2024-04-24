import React from 'react'
import { GiNotebook } from 'react-icons/gi'

const Header = () => {
  return (
    <header className="text-white _gradient mb-6 text-2xl md:text-4xl flex items-center px-4 pt-8 md:px-12 xl:px-24">
        <GiNotebook/>
        <h1 className="ml-2 mr-1">Note Manager</h1>
        <span className="text-sm mt-auto">By Jawad</span>
    </header>
  )
}

export default Header