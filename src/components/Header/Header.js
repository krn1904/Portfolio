import { useState } from 'react'
import { header, about } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const getInitials = (value) =>
  value
    .split(' ')
    .filter(Boolean)
    .map((segment) => segment[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

const Header = () => {
  const { homepage, title } = header
  const primaryLabel = about.name || title || 'Portfolio'
  const profilePhoto = about.photo?.trim()
  const initials = getInitials(primaryLabel)
  const [imageError, setImageError] = useState(false)

  return (
    <header className='header'>
      <div className='header__identity'>
        {/* Wrap avatar in link if homepage URL exists, otherwise render as static div */}
        {homepage ? (
          <a
            href={homepage}
            className='header__avatar-link'
            aria-label={`${primaryLabel} homepage`}
          >
            <div className='header__avatar'>
              {profilePhoto && !imageError ? (
                <img 
                  src={profilePhoto} 
                  alt={`${primaryLabel} portrait`}
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className='header__avatar-initials'>{initials}</span>
              )}
            </div>
          </a>
        ) : (
          <div className='header__avatar'>
            {profilePhoto && !imageError ? (
              <img 
                src={profilePhoto} 
                alt={`${primaryLabel} portrait`}
                onError={() => setImageError(true)}
              />
            ) : (
              <span className='header__avatar-initials'>{initials}</span>
            )}
          </div>
        )}
      </div>

      <Navbar />
    </header>
  )
}

export default Header
