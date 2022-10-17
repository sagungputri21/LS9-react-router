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
import UserPhotoPage from './pages/albums/PhotosPage';
import PostPage from './pages/post/PostPage';
import TodosPage from './pages/todos/TodosPage';

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
            <Route path="user-posts" element={<PostPage  />} />
            <Route path="user-todos" element={<TodosPage  />} />
          </Route>
          <Route path="/user/albums/:id" element={<AlbumsPage />} >
            <Route path=":id" element={<UserPhotoPage />} />
          </Route>
        </Routes>
      </Container>
    </div>
  )
}

export default App
