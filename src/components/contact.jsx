import React from "react";
import "../styles/sections.css";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-section"> <div className="subsection">
      <h2>Contact Me</h2>
     
        <div className="contact-info">
          <ul>
          <li><p><strong>Email:</strong>hadil.b.kassem@gmail.com</p></li>
          <li><p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hadil-kassem/" target="_blank" rel="noopener noreferrer">linkedin.com/in/hadil-kassem</a></p></li>
          <li><p><strong>GitHub:</strong> <a href="https://github.com/hadilbkassem" target="_blank" rel="noopener noreferrer">github.com/hadilbkassem</a></p></li>
        </ul>
        </div>
</div>
       
       <span className="icon">✉</span> 
     
    </div>
  );
}

export default Contact;
