import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home"
import Comments from "./pages/comments/Comments"
import Albums from "./pages/albums/Albums"
import Posts from "./pages/posts/Posts"
import Todos from "./pages/todos/Todos"
import Users from "./pages/users/Users"
import Photos from "./pages/photos/Photos"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path="comments" element={<Comments />} />
            <Route path="albums" element={<Albums />} />
            <Route path="posts" element={<Posts />} />
            <Route path="photos" element={<Photos />} />
            <Route path="todos" element={<Todos />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
