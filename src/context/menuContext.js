'use client'

import React, { createContext, useState, useContext } from 'react'

const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => useContext(MenuContext)
