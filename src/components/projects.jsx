import '../styles/sections.css';
import '../styles/projects.css';
import ImageCarousel from './imageCarousel';

import img1 from '../images/gamevault/1.png';
import img2 from '../images/gamevault/2.png';
import img3 from '../images/gamevault/3.png';


function Projects() {
  return (
    <div className="projects-section">
      <h2>Projects</h2>

      <div className="project-card"> 
         <ImageCarousel images={[img1,img2,img3]} className="car1" />
        <div><h3>GameVault</h3>
        <p>
          Developed using C# and ASP.NET, a full web commerce app where you can
          buy video games, including authentication and payment methods.
        </p>
        </div>
        
      
      </div>
    </div>
  );
}

export default Projects;
