import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Sidebar } from './components'
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from './pages'




function App() {
  // const [query, setQuery] = useState('')

  return (
    <BrowserRouter>
      <div className="bg-slate-800 text-white h-screen">
        {/* ========== layout ======== */}
        {/* --- Sidebar --- */}
        {/* <Sidebar setQuery={setQuery} query={query} /> */}
        {/* --- Navbar --- */}
        {/* --- main --- */}
        <main className='h-full'>
          <Navbar />
          <div className="container mx-auto main">
            <Routes>
              <Route path='/' element={<Feed />} />
              <Route path='/search/:q' element={<SearchFeed />} />
              <Route path='/channel/:id' element={<ChannelDetail />} />
              <Route path='/video/:id' element={<VideoDetail />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
