import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/homepage'
import Profile from './pages/profile'
import MentorProfile from './pages/mentorprofile'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="mentor-profile" element={<MentorProfile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
