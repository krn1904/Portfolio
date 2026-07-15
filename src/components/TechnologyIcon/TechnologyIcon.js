import { FaJava } from 'react-icons/fa'
import {
  SiAndroidstudio,
  SiAxios,
  SiBootstrap,
  SiClaude,
  SiClaudecode,
  SiCss,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiGithub,
  SiGithubcopilot,
  SiGooglegemini,
  SiHtml5,
  SiJsonwebtokens,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiRender,
  SiShopify,
  SiSourcetree,
  SiStripe,
  SiTelegram,
  SiTypeorm,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
  SiZod,
} from 'react-icons/si'
import { TbBrandOpenai } from 'react-icons/tb'
import { LuBlocks, LuBraces, LuCloud, LuCodeXml, LuContainer, LuNetwork, LuShieldCheck } from 'react-icons/lu'
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
  ChatGPT: TbBrandOpenai,
  Claude: SiClaude,
  'Claude Code': SiClaudecode,
  Bootstrap: SiBootstrap,
  Blockchain: LuBlocks,
  Codex: TbBrandOpenai,
  CSS: SiCss,
  Docker: SiDocker,
  'Drizzle ORM': SiDrizzle,
  DynamoDB: dynamoDbLogo,
  EC2: ec2Logo,
  'ECS Fargate': ecsLogo,
  Express: SiExpress,
  'Express.js': SiExpress,
  ECR: LuContainer,
  Git: SiGit,
  'GitHub Actions': SiGithubactions,
  GitHub: SiGithub,
  'GitHub Copilot': SiGithubcopilot,
  'Gemini AI': SiGooglegemini,
  HTML: SiHtml5,
  Java: FaJava,
  java: FaJava,
  JavaScript: SiJavascript,
  JWT: SiJsonwebtokens,
  Lambda: lambdaLogo,
  MongoDB: SiMongodb,
  NextAuth: LuShieldCheck,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  NodeJs: SiNodedotjs,
  Postgres: SiPostgresql,
  PostgreSQL: SiPostgresql,
  Python: SiPython,
  'Radix UI': SiRadixui,
  React: SiReact,
  'React Hook Form': SiReacthookform,
  'React Native': SiReact,
  'REST APIs': LuBraces,
  S3: s3Logo,
  Render: SiRender,
  Shopify: SiShopify,
  Sourcetree: SiSourcetree,
  Stripe: SiStripe,
  'Telegram Bot API': SiTelegram,
  TypeORM: SiTypeorm,
  TypeScript: SiTypescript,
  Vercel: SiVercel,
  Vite: SiVite,
  'Vue.js': SiVuedotjs,
  Vuex: SiVuedotjs,
  vueJs: SiVuedotjs,
  WebSocket: LuNetwork,
  WebSockets: LuNetwork,
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
