import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import { TechnologyIcon } from '../TechnologyIcon/TechnologyIcon'
import './ProjectContainer.css'

const getDescriptionPoints = (description = '') =>
  description
    .split(/(?<=\.)\s+(?=[A-Z])/)
    .map((point) => point.trim().replace(/\.$/, ''))
    .filter(Boolean)

const ProjectContainer = ({ project }) => {
  const descriptionPoints = getDescriptionPoints(project.description)

  return (
    <article className={`project-card${project.livePreview ? ' project-card--live' : ''}`}>
      <div className='project-card__header'>
        <h3 className='project-card__title'>{project.name}</h3>
        {project.livePreview ? (
          <span className='project-card__status'>
            <LaunchIcon fontSize='inherit' />
            Live Preview
          </span>
        ) : null}
      </div>

      {descriptionPoints.length ? (
        <div className='project-card__details'>
          <span className='project-card__details-label'>Highlights</span>
          <ul className='project-card__description-list'>
            {descriptionPoints.map((point, index) => (
              <li key={`${project.name || 'project'}-point-${index}`} className='project-card__description-item'>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.stack?.length ? (
        <ul className='project-card__stack'>
          {project.stack.map((item, index) => (
            <li
              key={`${project.name || 'project'}-${item}-${index}`}
              className='project-card__stack-item'
            >
              <TechnologyIcon name={item} />
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      <div className='project-card__links'>
        {project.sourceCode ? (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='project-card__link'
            target='_blank'
            rel='noopener'
          >
            <GitHubIcon fontSize='small' />
            <span>Code</span>
          </a>
        ) : null}

        {project.livePreview ? (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='project-card__link project-card__link--preview'
            target='_blank'
            rel='noreferrer'
          >
            <LaunchIcon fontSize='small' />
            <span>Live Preview</span>
          </a>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectContainer
