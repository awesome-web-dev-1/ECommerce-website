import React from 'react'

const Overlay = ({isOpen,onClick}) => {
  return (
    <div className={`fixed top-0 left-0 bg-neutral-800/50 w-full h-screen z-30 opacity-0 pointer-events-none transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : ""}`} onClick={onClick}></div>
  )
}

export default Overlay