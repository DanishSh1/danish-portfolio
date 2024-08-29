import './App.css';
import { ReactTyped } from 'react-typed';
import ImgCard from './ImgCard';
import { useRef } from 'react';
import ScrollToTop from './components/ScrollToTop';
import InfoCard from './InfoCard';
import Project from './Project';

function App() {
  const home = useRef(null);
  const skills = useRef(null);
  const contacts = useRef(null);
  const projects = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <div className="App">
      <ScrollToTop />
      <div className="navi-bar">
          <ul>
            <li onClick={() => scrollToSection(home)} className="link">Home</li>
            <li onClick={() => scrollToSection(skills)} className="link">Skills</li>
            <li onClick={() => scrollToSection(projects)} className="link">Projects</li>
            <li onClick={() => scrollToSection(contacts)} className="link">Contacts</li>
          </ul>
      </div>
      <div ref={home} className="animation-typing">
      <ReactTyped strings={[
        "Welcome to my portfolio!", "My name is Danish", "I am a student.", "I am a developer.", "I am an intern.", "I am a designer.", "I am a builder.", "I am a techie :).",
       ]} typeSpeed={40} backSpeed={50} loop />
      </div>
      <div className="personal-img">
        <img src="https://media.licdn.com/dms/image/D4D03AQGSH6vp_lcXcQ/profile-displayphoto-shrink_800_800/0/1697675879315?e=1729123200&v=beta&t=efYY1Nw5FG1HAQ7BD71SXoQ2ez59rQRGv1KRtnZCDXk" height="375px" width="375px"/>
      </div>
      <div ref={skills} className="skill-section">
        <InfoCard type="grey">
          I am a Computer Science student entering my third year at the University of Calgary, <b>I've interned 
          at Primco Limited, specifically their Data Science department.</b> In that role I was able to work on several
          projects and assignments, the tenants of which being <b>relational databases, and creating MySQL queries
          to help compile and analyze the data from Primco's customers and products into meaningful reports and insights</b>.
          I am currently seeking opportunities in Data Science, Software Engineering, Backend/Frontend Web Development, 
          and Data Analytics, if you have any inquiries, or concerns, please feel free to reach out. My contacts are at the bottom of this page.
        </InfoCard>
        <ImgCard url="data:image/jpeg;base64,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">
          Java
        </ImgCard>
        <ImgCard url="data:image/png;base64,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">
          Python
        </ImgCard>
        <ImgCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRup1AjLs73BTKaUXRedm-RiOMsbfGQ6zucUg&s">
          SQL
        </ImgCard>
        <ImgCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s">
          React.js
        </ImgCard>
        <ImgCard url="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png">
          HTML
        </ImgCard>
        <ImgCard url="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg">
          CSS
        </ImgCard>
        <ImgCard url="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png">
          C/C++
        </ImgCard>
        <ImgCard url="https://global.discourse-cdn.com/sitepoint/original/3X/e/b/eba3983204f9f9c01dab4c54e33b2b9d9a2731e0.png">
          JavaScript
        </ImgCard>
      </div>
      <div ref={projects}>
        <Project src="https://w7.pngwing.com/pngs/144/904/png-transparent-self-checkout-cash-register-self-service-sales-automation-others-miscellaneous-furniture-trade-thumbnail.png" header="Self-Checkout Control Software">
        ● Developed and integrated a Java Swing GUI system supporting user inputs for weighing products, processing multiple payment methods, and simulating barcode and PLU code scanning, improving transaction efficiency by 30%.<br/>
        ● Engineered a robust software architecture using the façade design pattern and implemented Java Swing, resulting in a 25% enhancement in user interface responsiveness and overall system performance.<br/>
        ● Encompassed every aspect of engineering industry-grade software, from interpreting given requirements, to UML modelling, to building using Java/Java Swing, and automated testing using JUnit, which tested 40+ usecases and key components of project.
        </Project>
        <Project src="https://media.licdn.com/dms/image/v2/C560BAQHZ8CJSLA_a6w/company-logo_200_200/company-logo_200_200/0/1650468134848/primco_limited_logo?e=2147483647&v=beta&t=lAS2AAl4kGloas190GOLFSjXFkU6u70lAdyM3cdT-Ho" header="Primco SQL Customer & Product Report">
        ● Utilised Primco’s consumer database to formulate custom reports displaying customer purchases, order id’s, and date of processed orders.<br/>
        ● Produced reports based on codified fields and conditions found in 20+ data tables, eg. product dates, customer credentials, etc.<br/>
        ● Developed a custom SQL query to compile numerous data tables and records based on a database consisting of more than 350+ Primco customers and relevant orders.<br/>
        ● SQL queries were later implemented in daily operations of shadowed team member, and commended by Primco employees for code simplicity, attention-to-detail, and ability to expedite analytical processes.
        </Project>
      </div>
      <div ref={contacts} style={{textAlign: 'center'}}>
        <a href='https://www.linkedin.com/in/danish-sharma-05575225a/'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className='link-img'></img>
        </a>
        <a href="https://github.com/Bandrailian/Iteration-3">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className='git-img'></img>
        </a>
        <a href="https://drive.google.com/file/d/1WCdhGc_6iqvNzDhpAb7LGBebsuLn_fn8/view?usp=sharing">
          <img src="https://www.freeiconspng.com/uploads/resume-icon-png-4.png" className='resume-img'></img>
        </a>
      </div>
    </div>
  );
}

export default App;
