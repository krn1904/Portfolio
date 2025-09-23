import { header, about } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header
  const brandLabel = title || about.name || 'Portfolio'
  const roleTagline = about.role ? `Portfolio · ${about.role}` : 'Portfolio'

  return (
    <header className='header'>
      <div className='header__branding'>
        {homepage ? (
          <a href={homepage} className='header__logo'>
            {brandLabel}
          </a>
        ) : (
          <span className='header__logo'>{brandLabel}</span>
        )}
        <span className='header__tagline'>{roleTagline}</span>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
