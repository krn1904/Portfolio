import { FaJava } from 'react-icons/fa'
import {
  SiAndroidstudio,
  SiAxios,
  SiBootstrap,
  SiCss,
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiTelegram,
  SiTypeorm,
  SiTypescript,
  SiVercel,
  SiVite,
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
import './TechnologyIcon.css'

const technologyIconMap = {
  AWS: LuCloud,
  'AWS IAM': iamLogo,
  Android: SiAndroidstudio,
  'Android-Studio': SiAndroidstudio,
  Axios: SiAxios,
  Bootstrap: SiBootstrap,
  Blockchain: LuBlocks,
  CSS: SiCss,
  Docker: SiDocker,
  DynamoDB: dynamoDbLogo,
  EC2: ec2Logo,
  'ECS Fargate': ecsLogo,
  Express: SiExpress,
  'GitHub Actions': SiGithubactions,
  HTML: SiHtml5,
  Java: FaJava,
  java: FaJava,
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
  'React Native': SiReact,
  'REST APIs': LuBraces,
  S3: s3Logo,
  'Telegram Bot API': SiTelegram,
  TypeORM: SiTypeorm,
  TypeScript: SiTypescript,
  Vercel: SiVercel,
  Vite: SiVite,
  'Vue.js': SiVuedotjs,
  Vuex: SiVuedotjs,
  vueJs: SiVuedotjs,
  WebSocket: LuNetwork,
  Zod: SiZod,
}

const TechnologyIcon = ({ name }) => {
  const Icon = technologyIconMap[name] || LuCodeXml

  return (
    <span className='technology-icon' data-brand={name} aria-hidden='true'>
      {typeof Icon === 'string' ? (
        <img src={Icon} alt='' className='technology-icon__image' />
      ) : (
        <Icon aria-hidden='true' focusable='false' />
      )}
    </span>
  )
}

export { TechnologyIcon }
