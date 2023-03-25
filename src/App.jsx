import { Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import DetailPage from './components/DetailPage'
import './App.css'

function App() {
  return (
    <div className="App container mt-3">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id/details" element={<DetailPage />} />
      </Routes>
    </div>
  )
}

export default App
