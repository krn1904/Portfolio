import { about } from '../../portfolio'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  const name = about.name || 'Karan Soni'

  return (
    <footer className='footer'>
      <p className='footer__copy'>
        © {year} {name}. Designed &amp; built with curiosity.
      </p>
    </footer>
  )
}

export default Footer
