import React from 'react'
import { useTheme } from '../ThemeContext'

const Header = () => {
  const {isDark} = useTheme()
  return (
    <div className={`w-full ${isDark ? "bg-black":"bg-white"} `}>
      <p>Theme is {isDark ? 'Dark': 'Light'}</p>
    </div>
  )
}

export default Header
