import React from 'react'

type Props = {
    showBanner: boolean
    message: string
}

const Banner = ({ showBanner, message }: Props) => {
  return (
    <div className={`fixed top-6 bg-white border-l-8 border-purpleMain rounded-lg p-4 transition-all ease-in-out duration-300 text-black ${showBanner ? 'translate-x-0 right-6' : 'translate-x-full right-0'}`}>
        <span>{message} &#10003;</span>
    </div>
  )
}

export default Banner