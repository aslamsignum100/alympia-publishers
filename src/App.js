
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/global.css';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AboutUsPage from './pages/aboutus';
import HomePage from './pages/home';
import BooksPage from './pages/books';
import ContactUsPage from './pages/contactus';
import AuthorsPage from './pages/authors';
import SubmissionPage from './pages/submission';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PublicLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="about" element={<AboutUsPage/>}/>
          <Route path="books" element={<BooksPage/>}/>
          <Route path="contact" element={<ContactUsPage/>}/>
          <Route path="authors" element={<AuthorsPage/>}/>
          <Route path="submission" element={<SubmissionPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
