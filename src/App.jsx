import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Project from './components/Project'
import Layout from './components/Layout'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/about' element={<Layout><About /></Layout>} />
          <Route path='/skills' element={<Layout><Skills /></Layout>} />
          <Route path='/project' element={<Layout><Project /></Layout>} />
          <Route path='/contact' element={<Layout><Contact /></Layout>} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
