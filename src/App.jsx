import { Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Content from './components/Content.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Container as="main" className="py-5">
        {/* Only the component for the current URL is shown here. */}
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/read" element={<Header />} />
          <Route path="/create" element={<Content />} />
        </Routes>
      </Container>
      {/* The footer stays visible when we change pages. */}
      <Footer />
    </div>
  )
}
