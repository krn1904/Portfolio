import uniqid from 'uniqid'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    <h4>{experience.title}</h4>
    <br></br>
    <p className='experience__company'>{experience.company}</p>
    <p className='experience__dates'>
      {experience.startDate} - {experience.endDate}
    </p>
    <p className='experience__description'>{experience.description}</p>
    <ul className='experience__description'>
      {experience.details.map((detail) => (
        <li key={uniqid()} className='experience_skills__list-item btn btn--plain'>
          {detail}
        </li>
      ))}
    </ul>
  </div>
)

export default ExperienceContainer
