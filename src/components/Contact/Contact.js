import { contact, about } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  const linkedIn = about.social?.linkedin

  return (
    <section className='section contact' id='contact'>
      <div className='contact__card'>
        <span className='eyebrow'>Let&apos;s talk</span>
        <h2 className='contact__title'>Ready for the next challenge?</h2>
        <p className='contact__copy'>
          If you&apos;re building ambitious products and need someone who loves
          shipping polished front-end experiences, let&apos;s open a conversation.
        </p>

        <div className='contact__actions'>
          <a href={`mailto:${contact.email}`} className='btn btn--primary contact__cta'>
            Email me
          </a>

          {linkedIn ? (
            <a
              href={linkedIn}
              className='btn btn--outline contact__cta'
              target='_blank'
              rel='noreferrer'
            >
              Connect on LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Contact
