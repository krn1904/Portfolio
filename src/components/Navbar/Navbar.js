import { useContext, useState, useEffect } from 'react'
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (showNavList) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showNavList])

  const toggleNavList = () => setShowNavList(!showNavList)
  
  const closeNavList = () => {
    if (showNavList) {
      setShowNavList(false)
    }
  }

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {experiences.length ? (
          <li className='nav__list-item'>
            <a
              href='#experiences'
              onClick={closeNavList}
              className='link link--nav'
            >
              Experience
            </a>
          </li>
        ) : null}
        
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={closeNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={closeNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={closeNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
        {/* comment out to move changes of experience section(removing knackroot) 
          and default theme set to dark on the prod. then can uncomment after verifying. */}  
        {/* <li className='nav__list-item'>
          <a
            href='#blogs'
            onClick={toggleNavList}
            className='link link--nav'
          >
            Blogs
          </a>
        </li> */}
      </ul>

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
    </nav>
  )
}

export default Navbar
