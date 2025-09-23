import { useContext, useState } from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact, experiences } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  const navLinks = [
    { label: 'About', href: '#about', show: true },
    { label: 'Experience', href: '#experiences', show: experiences.length },
    { label: 'Projects', href: '#projects', show: projects.length },
    { label: 'Skills', href: '#skills', show: skills.length },
    { label: 'Contact', href: '#contact', show: contact.email },
  ].filter((link) => link.show)

  return (
    <nav className='nav'>
      <ul className={`nav__list ${showNavList ? 'nav__list--active' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href} className='nav__list-item'>
            <a
              href={link.href}
              onClick={toggleNavList}
              className='link link--nav'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className='nav__actions'>
        <button
          type='button'
          onClick={toggleTheme}
          className='btn btn--icon nav__theme'
          aria-label='toggle theme'
        >
          {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>

        <button
          type='button'
          onClick={toggleNavList}
          className='btn btn--icon nav__hamburger'
          aria-label='toggle navigation'
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {showNavList ? (
        <button
          type='button'
          className='nav__backdrop'
          onClick={toggleNavList}
          aria-label='close navigation'
        />
      ) : null}
    </nav>
  )
}

export default Navbar
