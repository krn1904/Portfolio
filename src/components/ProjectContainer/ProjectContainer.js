import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import { FaJava } from 'react-icons/fa'
import {
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiTelegram,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiZod,
} from 'react-icons/si'
import { LuBlocks, LuBraces, LuCloud, LuCodeXml, LuNetwork, LuShieldCheck } from 'react-icons/lu'
import dynamoDbLogo from '../../assets/technology-icons/Arch_Amazon-DynamoDB_32.svg'
import ec2Logo from '../../assets/technology-icons/Arch_Amazon-EC2_32.svg'
import ecsLogo from '../../assets/technology-icons/Arch_Amazon-Elastic-Container-Service_32.svg'
import s3Logo from '../../assets/technology-icons/Arch_Amazon-Simple-Storage-Service_32.svg'
import iamLogo from '../../assets/technology-icons/Arch_AWS-Identity-and-Access-Management_32.svg'
import lambdaLogo from '../../assets/technology-icons/Arch_AWS-Lambda_32.svg'
import './ProjectContainer.css'

const stackIconMap = {
  AWS: LuCloud,
  Bootstrap: SiBootstrap,
  Blockchain: LuBlocks,
  Docker: SiDocker,
  DynamoDB: dynamoDbLogo,
  EC2: ec2Logo,
  'ECS Fargate': ecsLogo,
  Express: SiExpress,
  'GitHub Actions': SiGithubactions,
  Java: FaJava,
  JavaScript: SiJavascript,
  Lambda: lambdaLogo,
  MongoDB: SiMongodb,
  NextAuth: LuShieldCheck,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  NodeJs: SiNodedotjs,
  Postgres: SiPostgresql,
  PostgreSQL: SiPostgresql,
  'Radix UI': SiRadixui,
  React: SiReact,
  'React Hook Form': SiReacthookform,
  'REST APIs': LuBraces,
  S3: s3Logo,
  'Telegram Bot API': SiTelegram,
  TypeScript: SiTypescript,
  Vercel: SiVercel,
  'Vue.js': SiVuedotjs,
  Vuex: SiVuedotjs,
  WebSocket: LuNetwork,
  'AWS IAM': iamLogo,
  Zod: SiZod,
}

const StackIcon = ({ item }) => {
  const Icon = stackIconMap[item]

  if (typeof Icon === 'string') {
    return <img src={Icon} alt='' className='project-card__stack-logo-image' />
  }

  const IconComponent = Icon || LuCodeXml
  return <IconComponent aria-hidden='true' focusable='false' />
}

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
              data-brand={item}
            >
              <span className='project-card__stack-logo' aria-hidden='true'>
                <StackIcon item={item} />
              </span>
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
