import uniqid from 'uniqid'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience, isLast = false }) => {
  const hasHighlights = Boolean(experience.highlights?.length)
  const inlineDescription = hasHighlights && experience.description
  const highlightItems = inlineDescription
    ? [experience.description, ...experience.highlights]
    : experience.highlights || []

  return (
    <article className='experience-card'>
      <div className='experience-card__rail'>
        <span className='experience-card__dot' />
        {!isLast ? <span className='experience-card__line' /> : null}
      </div>

      <div className='experience-card__content'>
        <span className='experience-card__period'>
          {experience.startDate} — {experience.endDate}
        </span>
        <h3 className='experience-card__title'>{experience.title}</h3>
        <p className='experience-card__company'>{experience.company}</p>
        {!inlineDescription && experience.description ? (
          <p className='experience-card__description'>{experience.description}</p>
        ) : null}

        {hasHighlights ? (
          <ul className='experience-card__highlights'>
            {highlightItems.map((highlight) => (
              <li key={uniqid()} className='experience-card__highlight-item'>
                <span className='experience-card__highlight-bullet' aria-hidden='true' />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {experience.details?.length ? (
          <ul className='experience-card__tags'>
            {experience.details.map((detail) => (
              <li key={uniqid()} className='btn btn--plain experience-card__tag'>
                {detail}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

export default ExperienceContainer
