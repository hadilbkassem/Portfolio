import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

import DynamicBackground from './components/dynamicBackground';
import './App.css';
function App() {
  return (
    
    <div>
     <div className="page-container">
     <section id="home"><Intro /></section>
  <Navbar />
  <DynamicBackground />
 
</div>
     
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>

    </div>
  );

}

export default App;
