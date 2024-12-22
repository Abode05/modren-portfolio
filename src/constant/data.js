const navItem = [
  { name: 'Home', link: '#hero' },
  { name: 'About me', link: '#about' },
  { name: 'Education', link: 'experince' },
  { name: 'projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
]
const education = [
  {
    title: 'Backend Development-Laravel',
    content:
      'Received a training certificate from the Informatics Institute, specializing in backend development using Laravel. This program provided in-depth knowledge of server-side programming and database management.',
  },
  {
    title: 'Frontend Development-React',
    content:
      'Completed a training program at Vica Web Solution, focusing on frontend development with React. The course covered advanced concepts in React and javascript, including component-based architecture, state management, and responsive design.',
  },
  {
    title: 'React.js Fundamentals - Coursera',
    content:
      'Earned a certificate from Coursera for completing a course on the fundamentals of React.js. This course laid the foundation for building dynamic user interfaces and single-page applications.',
  },
]

// projects data
const projectData = [
  {
    id: 1,
    img: '/assets/project/dashborad1.png',
    name: 'Dashboard',
    language: 'React-js-Tailwind css',
    link: 'https://dashboard-dh5uisd6a-abdullatifs-projects.vercel.app/',
  },
  {
    id: 2,
    img: '/assets/project/edujar.png',
    name: 'edugar',
    language: 'React.js -Css',
    link: 'https://edugar-abdullatifs-projects.vercel.app/',
  },
  {
    id: 3,
    img: '/assets/Marka.png',
    name: 'Marka',
    language: 'React.js-Tailwind css',
    link: 'https://e-commerce-alpha-lemon.vercel.app/',
  },
  {
    id: 4,
    img: '/assets/appoont.png',
    name: 'Marka',
    language: 'React.js-Tailwind css',
    link: 'https://appoitment-dusky.vercel.app/',
  },
]

export { navItem, education, projectData }
