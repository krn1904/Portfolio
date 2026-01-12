import { render } from 'react-dom'
import smoothscroll from 'smoothscroll-polyfill'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

// Initialize smoothscroll polyfill for cross-browser support
smoothscroll.polyfill()

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
