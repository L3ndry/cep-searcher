import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./index.css"
import Search from './pages/Search'
import Result from './pages/Result'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Search />} />
                <Route path='/result' element={<Result />} />
            </Routes>
        </Router>
    )
}

export default App