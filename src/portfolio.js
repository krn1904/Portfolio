const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://krn1904.github.io/Portfolio',
  title: 'Hey..',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Karan Soni',
  role: 'Software Developer',
  description:
    "Highly Motivated toward my goal and eager to contribute my knowledge to the industry and improve myself for the better future of the company and myself.",
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/karansoni8349371b7/',
    github: 'https://github.com/krn1904',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Orbitium',
    description:
      'Orbitium is a Blockchain based crypto earning Application. You can earn from the Day one of registeration. There are multiple',
    stack: ['Postgres', 'TypeScript', 'React', 'NodeJs', 'TypeORM', 'Blockchain'],
  },
  {
    name: 'Tic-Tac-toe',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: [ 'TypeScript', 'React'],
    sourceCode: 'https://github.com/krn1904/Tic-Tac-Toe',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Book-E-Sell',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: [ 'TypeScript', 'React'],
    sourceCode: 'https://github.com/krn1904/Book-management',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Currency Converter',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/krn1904/CurrencyConverter', 
    // livePreview: 'https://github.com',
  },
  {
    name: 'TextUtils - It is a text analyzer, word counter and converter',
    description:
      '',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: "https://github.com/krn1904/textutils",
  },
 
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'NodeJs',
  'java',
  'Blockchain',
  'Postgres',
  'TypeORM',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Karanssoni2002@gmail.com',
}

export { header, about, projects, skills, contact }
