import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <article className='project-card'>
    <div className='project-card__header'>
      <h3 className='project-card__title'>{project.name}</h3>
      {project.livePreview ? <span className='project-card__status'>Live</span> : null}
    </div>

    <p className='project-card__description'>{project.description}</p>

    {project.stack?.length ? (
      <ul className='project-card__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project-card__stack-item btn btn--plain'>
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
        >
          <GitHubIcon fontSize='small' />
          <span>Code</span>
        </a>
      ) : null}

      {project.livePreview ? (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='project-card__link'
          target='_blank'
          rel='noreferrer'
        >
          <LaunchIcon fontSize='small' />
          <span>Preview</span>
        </a>
      ) : null}
    </div>
  </article>
)

export default ProjectContainer
