import './App.css'
import { Routes, Route } from 'react-router-dom';
// import Test from './pages/Test';
import Home from './pages/home/Home';
import Users from './pages/user/Users';
import UserDetail from './pages/user/UserDetail';
import Navbar from './components/navbar/Navbar';
import Container from './components/layout/Layout';
import AlbumsPage from './pages/albums/AlbumsPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/user" element={<Users />}/>
          <Route path="/albums" element={<AlbumsPage />} />
          {/* <Route path=":userId" element={<AlbumsPage />} /> */}
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
