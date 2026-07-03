import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/ui/Navbar'
import { CustomCursor } from './components/ui/CustomCursor'
import { BackToTop } from './components/ui/BackToTop'
import { Home } from './pages/Home'
import { Breakroom } from './pages/Breakroom'

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breakroom" element={<Breakroom />} />
      </Routes>
      <BackToTop />
    </BrowserRouter>
  )
}
