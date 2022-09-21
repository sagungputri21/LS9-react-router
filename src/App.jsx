import './App.css'
import { Routes, Route } from 'react-router-dom';
// import Test from './pages/Test';
import Home from './pages/home/Home';
import Users from './pages/user/Users';
import UserDetail from './pages/user/UserDetail';
import Navbar from './components/navbar/Navbar';
import Container from './components/layout/Layout';
import AlbumsPage from './pages/albums/AlbumsPage';
import RandomPhotos from './pages/albums/RandomPhotos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/user" element={<Users />} />
          <Route path="/user/:id" element={<UserDetail />} >
            <Route path="user-photos" element={<RandomPhotos  />} />
            <Route path="user-photos" element={<RandomPhotos  />} />
            <Route path="user-photos" element={<RandomPhotos  />} />
          </Route>
          <Route path="/user/albums/:id" element={<AlbumsPage />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
