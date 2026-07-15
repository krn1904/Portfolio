import { skills } from '../../portfolio'
import { TechnologyIcon } from '../TechnologyIcon/TechnologyIcon'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  const renderSkill = (skill) => {
    const name = typeof skill === 'string' ? skill : skill.name
    const content = (
      <>
        <TechnologyIcon name={name} />
        <span>{name}</span>
      </>
    )

    return skill.href ? (
      <a href={skill.href} className='skills__skill' target='_blank' rel='noreferrer'>
        {content}
      </a>
    ) : (
      <span className='skills__skill'>{content}</span>
    )
  }

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <p className='section__subtitle'>Tools and technologies I use to craft resilient, scalable experiences.</p>
      <div className='skills__groups'>
        {skills.map((group) => (
          <article
            key={group.category}
            className={`skills__group${group.category === 'AI & Tooling' ? ' skills__group--ai' : ''}`}
          >
            <h3 className='skills__group-title'>{group.category}</h3>
            <div className='skills__sections'>
              {group.sections.map((section) => (
                <div key={`${group.category}-${section.label}`} className='skills__subgroup'>
                  <h4 className='skills__subgroup-title'>{section.label}</h4>
                  <ul className='skills__list'>
                    {section.items.map((skill) => {
                      const name = typeof skill === 'string' ? skill : skill.name

                      return (
                        <li key={`${group.category}-${section.label}-${name}`} className='skills__list-item'>
                          {renderSkill(skill)}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
