import '../styles/sections.css';
import '../styles/skills.css';

function Skills() {
  return (
    <div className="skills-section">
      <h2>Skills</h2>

      <div className="skills-cards">
        <div className="skill-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>C</li>
            <li>C#</li>
            <li>Python</li>
            <li>Java</li>
            <li>PHP</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Web Technologies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Networking</h3>
          <ul>
            <li>Wireshark</li>
            <li>Cisco Packet Tracer</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Frameworks & Tools</h3>
          <ul>
            <li>Android Studio</li>
            <li>Visual Studio</li>
            <li>Oracle SQL Developer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
