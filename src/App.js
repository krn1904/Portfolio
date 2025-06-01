import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Blogs from './components/Blogs/Blogs'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Analytics } from '@vercel/analytics/react'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
// git check comment
  return (
    <>
      <div id='top' className={`${themeName} app`}>
        <Header />

        <main>
          <About />
          <Experience />
          <Projects />
          <Skills />
          {/* comment out to move changes of experience section(removing knackroot) 
          and default theme set to dark on the prod. then can uncomment after verifying. */}
          {/* <Blogs />   */}
          <Contact />
        </main>

        <ScrollToTop />
        <Footer />
      </div>
      
      <Analytics />
    </>
  )
}

export default App
