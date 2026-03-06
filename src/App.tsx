import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Studies from './pages/Studies';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import ParentGuide from './pages/ParentGuide';
import Reviews from './pages/Reviews';
import Teachers from './pages/Teachers';
import Activities from './pages/Activities';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="classes" element={<Classes />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="studies" element={<Studies />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="parent-guide" element={<ParentGuide />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="activities" element={<Activities />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

