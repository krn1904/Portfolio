import profilePhoto from './assets/karan-soni-image.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: process.env.REACT_APP_PORTFOLIOURL,
  title: 'Hey!', // can be removed if we are using KS as the left header text
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Karan Soni',
  role: 'Software Developer',
  description:
    "Highly Motivated toward my goal and eager to contribute my knowledge to the industry and improve myself for the better future of the company and myself.",
  // Place resume file inside public/assets and keep this path in sync
  resume: '/assets/karan-soni-resume.pdf',
  // Photo is imported from src/assets for optimization
  photo: profilePhoto,
  social: {
    linkedin: 'https://www.linkedin.com/in/karanssoni/',
    github: 'https://github.com/krn1904',
  },
}

const experiences = [
  {
  title : 'Associate Engineer',
  company : 'Cygnet Digital',
  startDate: 'September 2023',
  endDate: 'July 2024',
  description:
    "Scaled a Vue.js GST taxation platform for enterprise compliance while modernising the front-end stack.",
  highlights: [
    'Extended the Vue.js GST compliance platform for enterprise filers, hardening high-volume workflows and accessibility.',
    'Built a library of reusable Vue 3 components and composables, shrinking duplicate code across feature squads.',
    'Implemented GST reporting modules with Vuex state, Axios-powered REST integrations, and real-time ledger updates.',
    'Delivered a responsive homepage redesign with product and design, tuning layout performance and UI polish.',
    'Co-led the migration from Vue 2 to Vue 3 on Vite, pairing rollout with structured defect triage to keep releases stable.',
  ],
  details: [
    'Vue.js', 'Vuex', 'TypeScript', 'Vite', 'REST APIs', 'Component Systems'
  ]
},
{
  title : 'Software Developer',
  company : 'Knackroot Technolabs LLP',
  startDate: 'January 2023',
  endDate: 'June 2023',
  description:
    'Led full-stack delivery of a blockchain-based crypto earnings platform across web and mobile.',
  highlights: [
    'Managed the development of a blockchain-powered crypto earnings application.',
    'Designed RESTful APIs and relational schemas with Node.js and PostgreSQL to support secure transactions.',
    'Produced and deployed React Native builds for both Android and iOS ecosystems.',
    'Partnered with designers, QA, and product stakeholders to refine features iteratively.',
    'Owned deployment workflows and maintenance, safeguarding scalability in a fast-paced release cycle.',
    'Conducted targeted testing and debugging sessions to elevate overall reliability.',
  ],
  details: [
    'React', 'React Native', 'Node.js', 'PostgreSQL', 'REST APIs', 'Blockchain'
  ]
}
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Orbitium',
    description:
      'Orbitium is a Blockchain based crypto earning Application. You can earn from the Day one of registration. There are multiple',
    stack: ['Postgres', 'TypeScript', 'React', 'NodeJs', 'TypeORM', 'Blockchain'],
  },
  {
    name: 'Tic-Tac-toe',
    description:
      "Built in Java using Android Studio, my project is a classic Tic-Tac-Toe game. It's a two-player game designed for fun and entertainment.",
    stack: [ 'Java', 'Android-Studio'],
    sourceCode: 'https://github.com/krn1904/Tic-Tac-Toe',
    // livePreview: 'https://github.com',
  },
  // removed project as it is not completed and not have any preeview. Think to add later when completed
  // {
  //   name: 'Book-E-Sell',
  //   description:
  //     "Introducing 'Book-e-Sell,' a library management project that brings all available books to one convenient platform.",
  //   stack: [ 'React','Nodejs','mongoDb'],
  //   sourceCode: 'https://github.com/krn1904/Book-management',
  //   // livePreview: 'https://github.com',
  // },

  // removing as no need to show basic projects and not able to preview as well!
  // {
  //   name: 'Currency Converter',
  //   description:
  //     'Explore the Currency Converter project, a tool that simplifies currency conversion for a specific set of currencies',
  //   stack: ['Android-Studio', 'Java'],
  //   sourceCode: 'https://github.com/krn1904/CurrencyConverter', 
  //   // livePreview: 'https://github.com',
  // },
  {
    name: 'TextUtils',
    description:
      'TextUtils: Your ultimate text companion. A versatile tool offering text analysis, word counting, and conversion capabilities."',
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: "https://github.com/krn1904/textutils",
    livePreview: process.env.REACT_APP_TEXTUTILSURL
  },
  {
    name: 'Real-Time Chat Application',
    description:
      'Full-stack WebSocket chat app with room-based messaging, live connection status, and session-based message history. Features React frontend with custom hooks for connection management, Node.js/Express backend with WebSocket server, and automatic reconnection with message queuing.',
    stack: ['React', 'Node.js', 'Express', 'WebSocket', 'MongoDB', 'Bootstrap'],
    sourceCode: 'https://github.com/krn1904/Chat-app',
    livePreview: process.env.REACT_APP_CHATAPPFEURL
  }
 
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'React',
  'vueJs',
  'NodeJs',
  'HTML',
  'CSS',
  'Postgres',
  'TypeORM',
  'java',
  'Blockchain',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Karanssoni2002@gmail.com',
}

export { header, about, experiences, projects, skills, contact }
