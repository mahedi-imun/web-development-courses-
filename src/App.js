import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Cart from './components/Cart/Cart';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Courses' element={<Courses/>}></Route>
        <Route path='/Cart' element={<Cart></Cart>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
