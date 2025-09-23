import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import './Experience.css'

const Experiences = () => {
  if (!experiences.length) return null

  return (
    <section id='experiences' className='section experiences'>
      <h2 className='section__title'>Experience</h2>
      <p className='section__subtitle'>Shaping products and teams across scaling startups.</p>

      <div className='experiences__timeline'>
        {experiences.map((experience, index) => (
          <ExperienceContainer
            key={uniqid()}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

export default Experiences
