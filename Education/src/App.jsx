import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
 // Import your alternate header
import Home from './pages/home';
import Footer from './components/footer';
import About from './pages/about';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import Courses from './pages/courses';
import MyComponent from './pages/CourseDetail1';
import Header1 from './components/header2';
import Internships from './pages/internship';
import Contact from './pages/Connect';

function App() {
  const location = useLocation();

  // Conditionally render Header1 only for the full-stack route
  const showHeader1 = location.pathname === "/full-stack";

  return (
    <div className="flex flex-col min-h-screen">
      {showHeader1 ? <Header1/> : <Header />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/full-stack" element={<MyComponent />} />
          <Route path="/internship" element={<Internships />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
