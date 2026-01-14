import { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { about, contact } from '../../portfolio'
import './About.css'

const getInitials = (value = '') =>
  value
    .split(' ')
    .filter(Boolean)
    .map((segment) => segment[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

const About = () => {
  const { name, role, description, resume, social, photo } = about
  const photoSrc = photo?.trim()
  const initials = name ? getInitials(name) : 'KS'
  const [imageError, setImageError] = useState(false)

  return (
    <section className='section about' id='about'>
      <div className='about__grid'>
        <div className='about__intro'>
          {role ? <span className='eyebrow'>{role}</span> : null}
          {name ? (
            <h1 className='about__title'>
              Hi, I&apos;m <span className='about__name'>{name}</span>
            </h1>
          ) : null}
          <p className='about__tagline'>
            Turning complex requirements into calm, reliable digital experiences.
          </p>

          {description ? (
            <p className='about__desc'>{description}</p>
          ) : null}

          <div className='about__actions'>
            {resume ? (
              <a href={resume} className='about__resume' target='_blank' rel='noopener noreferrer'>
                <span className='btn btn--outline'>View résumé</span>
              </a>
            ) : null}

            {contact.email ? (
              <a href='#contact' className='btn btn--primary about__cta'>
                Let&apos;s collaborate
              </a>
            ) : null}
          </div>

          {social ? (
            <div className='about__social'>
              {social.github ? (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHubIcon fontSize='large' />
                </a>
              ) : null}

              {social.linkedin ? (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LinkedInIcon fontSize='large' />
                </a>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className='about__profile'>
          <div className='about__halo' />
          <div className='about__photo'>
            {photoSrc && !imageError ? (
              <img 
                src={photoSrc} 
                alt={`${name || 'Profile'} portrait`}
                loading='lazy'
                onError={() => setImageError(true)}
              />
            ) : (
              <span className='about__photo-initials'>{initials}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
