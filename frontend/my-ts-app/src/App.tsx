import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/homepage'
import HelloWorld from './pages/helloworld';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage onClick={() => console.log('Clicked!')} />} />
      <Route path="/helloworld" element={<HelloWorld />} />
    </Routes>


  )
}

export default App
