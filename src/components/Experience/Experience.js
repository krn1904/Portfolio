import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import './Experience.css'

const Experiences = () => {
  if (!experiences.length) return null

  return (
    <section id='experiences' className='section experiences'>
      <h2 className='section__title'>Experience</h2>

      <div className='experiences__grid'>
        {experiences.map((experience) => (
          <ExperienceContainer key={uniqid()} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default Experiences
