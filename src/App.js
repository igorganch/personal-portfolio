import logo from './logo.svg';
import ReactDOM, { render } from "react-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Container, Row, Col, Card, Table, Button, Badge} from 'react-bootstrap';
import {Link} from 'react-scroll';
import reactsvg from './logo.svg';
import resume from "./IHARGANCHARENKA-RESUME.pdf"
import Experience from "./Experience.js";

import Hello from './Hello.js'
import Cards from './Cards';
import Counter from './Counter';
import { bootstrappng,css,django,hmtl,jq,js,postgresql,PS, python,
  c,
  cplusspluss,
  csharp,
  java,
  mongo,
  angular,
  nodejs,
  reactpng,
  ig,
  linkedin,
  github,
  grocerrystorevid,
  play,
  invvid,
  sql,
  blogvid,
  dealershipAPI,
  cashierApp,
  audi,
  opengl,
  threedvid,
  cashc,
  tencubes,
  hangman,
  ASPNET1,
  ASPNET2,
  NETCORE,
  PHP,
  EduTechnoz


 } from './index.js';
import { useState } from 'react';
import { useEffect } from 'react';


function Skill(props){
  useEffect(()=>{
    AOS.init();
  });
  
  return(
    <div class ="skillsBox">
    
    {props.skills.map((skill)=> 
    <div key = {skill.name} className ="skillsChart">
      <hr className ="conHeaderLine"/>
      <div data-aos="zoom-in" className ="flex-container-e skills-item">
          <div className = "flex-item1">
            <img className = "zoom images"src={skill.image} />

          </div>

          <div className = "flex-item2">
              <p className = "skillsP">{skill.name}</p>
          </div>

          <div className = "flex-item3">
              <p className = "skillsP">{skill.experience}</p>
          </div>

      </div>
      
     
    </div>
    )}
     <hr className ="conHeaderLine"/>
    </div>

    
  );



}


function Skills(props) {
  const frontEnd = "frontEnd";
  const backEnd = "backEnd";
  const fullStack = "fullStack";
  const other ="other";
  let [category,selectedCategory] = useState(props.category);
  const [skillArray,setSkillArray] =useState([]);

  const [skills, skillsSets] = useState([
    { 'name'  : "JavaScript"  , 'image'   : js, "category" : fullStack, "experience" : "3 Year Experience" },
    { 'name'  : "Django"  , 'image'   : django, "category" : fullStack, "experience" : "1 Year Experience" },
    { 'name'  : "React.js"  , 'image'   : reactpng, "category" : frontEnd, "experience" : "1.5 Year Experience" },
    { 'name'  : "Angular"  , 'image'   : angular, "category" : frontEnd, "experience" : "1.5 Year Experience" },
    { 'name'  : "CSS"  , 'image'   : css, "category" : frontEnd, "experience" : "3 Year Experience" },
    { 'name'  : "JQuery"  , 'image'   : jq, "category" : frontEnd, "experience" : "3 Year Experience" },
    { 'name'  : "HTML5"  , 'image'   : hmtl, "category" : frontEnd, "experience" : "3 Year Experience" },
    { 'name'  : "Bootstrap"  , 'image'   : bootstrappng, "category" : frontEnd, "experience" : "3 Year Experience" },
    { 'name'  : "C++"  , 'image'   : cplusspluss, "category" : other, "experience" : "3 Year Experience" },
    { 'name'  : "C#"  , 'image'   : csharp, "category" : other, "experience" : "2 Year Experience" },
    { 'name'  : "C"  , 'image'   : c, "category" : other, "experience" : "4 Year Experience" },
    { 'name'  : "Python"  , 'image'   : python, "category" : other, "experience" : "1 Year Experience" },
    { 'name'  : "Java"  , 'image'   : java, "category" :  other, "experience" : "2 Year Experience"},
    { 'name'  : "node.js"  , 'image'   : nodejs, "category" : backEnd, "experience" : "2.5 Year Experience" },
    { 'name'  : "SQL"  , 'image'   : sql, "category" : other , "experience" : "3 Year Experience"},
    { 'name'  : "MongoDB"  , 'image'   : mongo, "category" : backEnd, "experience" : "2 Year Experience" },
    { 'name'  : "PostgreSQL"  , 'image'   : postgresql, "category" : backEnd, "experience" : "2 Year Experience" },
    { 'name'  : "Adobe Photoshop"  , 'image'   : PS, "category" : other , "experience" : "1 Year Experience"},
    { 'name'  : "OpenGL"  , 'image'   : opengl, "category" : other, "experience" : "1 Year Experience" },
    { 'name'  : "ASP.NET"  , 'image'   : ASPNET2, "category" : backEnd, "experience" : "2 Year Experience" },
    { 'name'  : ".NET Core"  , 'image'   : NETCORE, "category" : backEnd, "experience" : "1 Year Experience" },
    { 'name'  : "PHP"  , 'image'   : PHP, "category" : backEnd, "experience" : "2 Year Experience" }
]) 


if (skillArray.length !== 0){
  let i =0; 
  let size = skillArray.length;
  while (i < size){
    skillArray.pop();
    i++;
  }

}


for ( let i = 0 ; i < skills.length; i++){
  if(props.category === skills[i].category){
    skillArray.push(skills[i]);
    console.log(skills[i].name);
  }

}

return (

  <Skill skills = {skillArray}/>

);
}

function App() {
  useEffect(()=>{
    AOS.init();
  });
  const frontEnd = "frontEnd";
  const backEnd = "backEnd";
  const fullStack = "fullStack";
  const other ="other";
  const [category,selectedCategory] = useState(frontEnd);


  function checkCategroy(){
    console.log(category);


  }








  const [projects, projectSets]  = useState([
      {'name' : 'EduTechnoz', 'video' : EduTechnoz,  'live' : true , 'tools' : ['React' ,'JavaScript', 'HTML5', 'CSS'], 'github' : "" ,  'liveurl' : "https://sample.edutechnoz.com/",   'desc'  : "A series of pages for a kids educational company I had to create during my internship in Kiuloper. It is responsive on every device." },
      {'name' : 'Blog website', 'video' :  blogvid,  'live' : true , 'tools' : ['Angular' , 'Bootstrap'],'github' : "https://github.com/igorganch/Blog-Website" ,'liveurl' : "https://inspiring-snyder-def874.netlify.app"  ,'desc'  : "A blog website where user's are able post, comment, and use hashtags. There is also an Admin section where the owner can edit and remove posts." },
      {'name' : 'Dealership API', 'video' : dealershipAPI,  'live' : true ,'tools' : ['Node.js' , 'JavaScript', 'HTML5', 'Rest API'], 'github' : "https://github.com/igorganch/dealershipAPI" ,'liveurl' : "https://dealership-db.herokuapp.com/", 'desc'  : "This is a simple web app API which retrieves data from a database and a user is able to perform CRUD operations" },
      {'name' : 'Mobile Cashier App', 'video' : cashierApp,  'live' : true , 'tools' : ['Angular' , 'HTML', 'OOP', 'CSS'],'github' : "https://github.com/igorganch/Angular-Cashier-App" , 'liveurl' : "https://heuristic-shannon-eaaa58.netlify.app/", 'desc'  : "This an Angular Ionic mobile app that acts as a cash register which manages restocking, purchases, and purchase histories. " },
      {'name' : 'Inventory Manager', 'video' : invvid, 'live' : false ,'tools' : ['C++' , 'OOP'],'github' : "https://github.com/igorganch/Inventory-Manager" ,  'liveurl' : "", 'desc'  : "This app serves a purpose of keeping track of orders, inventory, and items sold." },
      {'name' : 'Mobile Cashier App C#', 'video' : cashc,  'live' : false , 'tools' : ['C#' , 'OOP', 'Xamrin.Forms'], 'github' : "https://github.com/igorganch/CashierApp" ,  'liveurl' : "", 'desc'  : "A mobile app that acts as a cash register which keeps track of items sold and allows the user to restock items." },
      {'name' : 'Computer Graphics 4 cubes', 'video' : threedvid,  'live' : false ,'tools' : ['C++' , 'OpenGL'], 'github' : "https://github.com/igorganch/3DGraphics" ,  'liveurl' : "", 'desc'  : "This openGL app loads 4 cubes, where the user can assign different textures to the cubes aswell as differrent transformations. " },
      {'name' : 'Hangman', 'video' : hangman,   'live' : false ,'tools' : ['Python' , 'OOP', 'MongoDB'], 'github' : "https://github.com/igorganch/Hangman" ,  'liveurl' : "", 'desc'  : "This is a simple game of hangman created using python which saves all the scores players have scored to the database." }     ,
      {'name' : 'Computer Graphics 10 cubes', 'video' : tencubes,   'live' : false ,'tools' : ['C++' , 'OpenGL'], 'github' : "https://github.com/igorganch/OpenGL10SquaresPerspective" ,  'liveurl' : "", 'desc'  : "This openGL app generates 10 squares, where you can change the camera perspective by zooming in/out and shifting the view from left and right." },
      {'name' : 'Connect 4', 'video' : '/url', 'video' : null, 'live' : false ,'tools' : ['Java' , 'JavaFX', 'OOP'],'github' : "https://github.com/igorganch/Connect4" ,  'liveurl' : "", 'desc'  : "A 2 Player classic game of connect 4, in order to win a player must a-line 4 of their own red/yellow coloured circles either diagonally, horizontally or vertically." },

  ]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4, 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4 ,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items:  1, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1 ,
    }
  };
   function aboutMeClick(event){
    event.preventDefault();


  }


  return (
    <div className="App">
        <div className = "home" >

  
        <Container className="menu">
        <div className="myBox">
            <div class="drawing-borders" id="box">
                <p className = "myName">IHAR &nbsp; GANCHARENKA</p>
            </div>
        </div>
          
          <div className ="exp">
            <Row className="menuOptions ">
              <Col className= "equal text-center">
              <p className = "expand aboutHome"><Link to ="aboutPage" >About </Link></p>
              </Col>
              
              <Col className= "equal text-center">
             <p className = "expand skillsHome"><Link to ="skillsPage" >Skills</Link></p>
              </Col>

              <Col className= "equal text-center">
             <p className = "expand expHome"><Link to ="experiencePage" >Experience</Link></p>
              </Col>

              <Col   className= "equal text-center">
              <p className = "expand projHome"><Link to ="projectsPage" >Projects</Link></p>
              </Col>
              <Col   className= "equal text-center">
              <p className = "expand contHome"><Link to ="contactPage" >Contact </Link></p>
              </Col>
            </Row>
          </div>
        </Container>  
          
   




      </div>
     
    
      
    
        <div id = "aboutPage"className = "aboutPage" >



          <div className ="pushToFront">
          <Container className = "navigationBar">
            <Row className = "navItems">
              <Col className= "equal text-center">
                <p className = "aboutMe"><Link to ="skillsPage" >My&nbsp; skills</Link></p>
              </Col>
              
              <Col className= "equal text-center">
                <p className = "aboutMe"><Link to ="experiencePage" >Experience</Link></p>
              </Col>

              <Col className= "equal text-center">
             <p className = "mySkills"><Link to ="projectsPage" >Projects</Link></p>
              </Col>

              <Col className= "equal text-center">
              <p className = "cont"><Link to ="contactPage" >Contact </Link></p>
              </Col>

            </Row>
          </Container>

        <div class="content">
          
          <div className ="conheaderdivt">
            <h1 className = "conheader">ABOUT ME </h1>   
            <div>
              <div className ="descAbout">
                <hr className = "conHeaderLine"></hr>
                <p className ="contactDesc">I'm a fullstack developer located in Toronto, Ontario, Canada. <br></br><br></br>I have a crazy passion for coding, cars(german car enuthsiast) as well as lifting weights. 
            During my spare time I love to learn new software development tools and create apps for fun. I'm currently looking for a position to contribute and expand my abilities in programming.</p>
              </div>
            </div>
          </div>

          <div className ="imgAvatar">
          <div className ="flex-container-e">
            <div className = "flex-item">
            <a href="https://www.instagram.com/igor.ganch/"><img className = "zoom images" src ={ig}></img></a>
            </div>
            <div className = "flex-item">
                <a href="https://www.linkedin.com/in/ihar-gancharenka-a22823207/"><img className = "zoom images" src ={linkedin}></img></a>
            </div>
            <div className = "flex-item">
            <a href="https://github.com/igorganch"><img className = "zoom images" src ={github}></img></a>
            </div> 
            </div>
            <hr className = "conHeaderLine"></hr>
            <img className ="imgOfMe" src ={audi}></img>

          </div>

          </div>
        

          
          </div>
          <div className = "blackObj">
          </div>

          <div className = "clouds"></div>
          <div className = "clouds2"></div>
          <div className = "clouds3"></div>
          <div className = "clouds4"></div>
          <div className = "clouds5"></div>
                                                 
        </div>

        <div id="skillsPage" className = "skills">
        <div className ="pushToFronttwo">
        <Container className = "navigationBar">
            <Row className = "navItems">
              <Col className= "equal text-center">
                <p className = "aboutMe"><Link to ="aboutPage" >About </Link></p>
              </Col>

              <Col className= "equal text-center">
                <p className = "aboutMe"><Link to ="experiencePage" >Experience</Link></p>
              </Col>

              <Col className= "equal text-center">
             <p className = "mySkills"><Link to ="projectsPage" >Projects</Link></p>
              </Col>

              <Col className= "equal text-center">
              <p className = "cont"><Link to ="contactPage" >Contact </Link></p>
              </Col>

            </Row>
          </Container>

          <div className= "middle">
          <hr className = "projHeaderLine"></hr>
          <h1 className = "projHeader">Skills</h1>
          <hr className = "projHeaderLine"></hr>
          </div>
          <Container className = "navigationSkills">
            <Row className = "navItems">

            <Col className= "equal text-center">
              <button value = {fullStack} onClick={() => selectedCategory(fullStack)} className="invis">Full Stack</button>
              </Col>


              <Col className= "equal text-center">
              <button value = {frontEnd} onClick={() => selectedCategory(frontEnd)} className="invis">Front End</button>
              </Col>

              <Col className= "equal text-center">
              <button value = {backEnd} onClick={() => selectedCategory(backEnd)} className="invis">Back End</button>
              </Col>

              <Col className= "equal text-center">
              <button className="invis" onClick={() => selectedCategory(other)}  >Other</button>
              </Col>

            </Row>
          </Container>
          

          
          <Skills category = {category}/>
          




          


          






          </div>
        </div>
        <div id="experiencePage">
        <Experience />
        </div>
       

        <div id = "projectsPage"className = "projects" >
        <Container className = "navigationBar">
            <Row className = "navItems">
              <Col className= "equal text-center">
                <p className = "aboutMe"><Link to ="aboutPage" >About </Link></p>
              </Col>

              <Col className= "equal text-center">
             <p className = "mySkills"><Link to ="skillsPage" >My&nbsp; skills</Link></p>
              </Col>

              <Col className= "equal text-center">
                <p className = "aboutMe"><Link to ="experiencePage" >Experience</Link></p>
              </Col>

              <Col className= "equal text-center">
              <p className = "cont"><Link to ="contactPage" >Contact</Link></p>
              </Col>

            </Row>
          </Container>




          <div className= "middle">
          <hr className = "projHeaderLine"></hr>
          <h1 className = "projHeader">Projects</h1>
          <hr className = "projHeaderLine"></hr>
          </div>
          <div   style={{
    paddingBottom: '30px',
    position: 'relative',
    top: "10%",

  
  
  }}>

        <Carousel  class="setCarouselHeight" removeArrowOnDeviceType={["tablet", "mobile"]}  responsive={responsive} showDots ={true}     renderButtonGroupOutside={false}
    renderDotsOutside  >

            {projects.map((project) => 
                <div className="setCardSpacing">
                <Card className = " projectCards bg-dark text-white zoom2" >
                <video variant="top" loop onMouseOver={e => e.target.play()} onMouseLeave={e => e.target.pause()}  src={project.video}/>
                  <Card.Body>
                    <Card.Title >{project.name}</Card.Title>
                    <Card.Text>
                      {project.desc}
                    </Card.Text>
                  <div className ="extras">

                    <div className ="flex-container-et">
                      {(project.tools).map((tool) =>
                      <div className="badge-spacing">
                      <Badge bg="secondary badges">{tool}</Badge>
                      </div>
                      
                      )}


                    </div>

                    <div className= "flex-container-git-live">
                    {project.live ? (<a href ={project.liveurl}><Button className = "liveButton"variant="danger">Live</Button></a>) : (null)}
                    <a href = {project.github}><Button className = "githubButton" variant="primary"><img className = "gitButton" src={github}/></Button></a>
                    </div>
                    </div>

                  </Card.Body>
      
                </Card>
               </div>
              
            )}

            

 
          </Carousel>
          </div>
          
          </div> 

          <div id= "contactPage"className = "contact" >

          <Container className = "navigationBar">
            <Row className = "navItems">
            <Col className= "equal text-center">
                <p className = "aboutMe"><Link to ="aboutPage" >About </Link></p>
              </Col>

              <Col className= "equal text-center">
             <p className = "mySkills"><Link to ="skillsPage" >My&nbsp; skills</Link></p>
              </Col>

              <Col className= "equal text-center">
                <p className = "aboutMe"><Link to ="experiencePage" >Experience</Link></p>
              </Col>

              <Col className= "equal text-center">
              <p className = "cont"><Link to ="projectsPage" >Projects</Link></p>
              </Col>

            </Row>
          </Container>
        
          <div class="content">
          
            <div className ="conheaderdiv">
              <h1 className = "conheader">Contact</h1>   
              <div>
                <div className ="flex-item">
                  <hr className = "conHeaderLine"></hr>
                  <p className ="contactDesc">Want to work together? Send me a messages and also feel free to ring up my number!</p>
                </div>
              </div>
            </div>


          <div className= "contactinfo">
            <p className ="contactDesc">18 Cedarcroft Blvd, M2R2Z2, Toronto, ON</p>
            <p className ="contactDesc">Phone : +1 (647) 787 0734</p>
            <p className ="contactDesc">Email : igorganch1@gmail.com</p>
            
          </div>
          <div className = "button-group">
            <div className ="flex-item">
            <a href = "mailto: igorganch1@gmail.com"><button className ="email">Send me an E-mail</button></a>
            </div>
            <div className ="flex-item">
            <a href ={resume} download="IGANCHARENKA-RESUME"> <button className ="resume">Resume</button></a>
            </div>
          </div>
          <div className ="last">
     
          <img src={reactsvg} className="App-logo" alt="logo" />
          <p className="devWith">Developed with React.js</p>

          </div>





          </div>


        

      </div>
     










           


        
   
     
      
      </div>
  
 
     
     
      
          
  
    
  );
}

export default App;
