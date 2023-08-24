const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://krn1904.github.io/Portfolio',
  title: 'Hey!',
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
  {
    name: 'Book-E-Sell',
    description:
      "Introducing 'Book-e-Sell,' a library management project that brings all available books to one convenient platform.",
    stack: [ 'React','Nodejs','mongoDb'],
    sourceCode: 'https://github.com/krn1904/Book-management',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Currency Converter',
    description:
      'Explore the Currency Converter project, a tool that simplifies currency conversion for a specific set of currencies',
    stack: ['Android-Studio', 'Java'],
    sourceCode: 'https://github.com/krn1904/CurrencyConverter', 
    // livePreview: 'https://github.com',
  },
  {
    name: 'TextUtils',
    description:
      'TextUtils: Your ultimate text companion. A versatile tool offering text analysis, word counting, and conversion capabilities."',
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: "https://github.com/krn1904/textutils",
  },
  {
    name: 'Chat-Application',
    description:
      'Currently working on the chat-application. where people can come and chat with the friends.This will be implemented with"',
    stack: ['TypeScript', 'React'],
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

const workExperience = {

}

export { header, about, projects, skills, contact }
