import logo from './logo.svg';
import ReactDOM from "react-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col, Card, Table, Button, Badge} from 'react-bootstrap';



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
  blogvid,
  dealershipAPI,
  cashierApp,
  audi

 } from './index.js';
import { useState } from 'react';

function App() {

  const frontEnd = "frontEnd";
  const backEnd = "backEnd";
  const fullStack = "fullStack";
  const other ="other";
  const selectedCategory = frontEnd;


  function checkSkillType(skill){
    
    if((skills).localeCompare(selectedCategory)  ){
      console.log(skill);
      return true;
      

    }
    else{
      console.log(skill+ "blyat");
      return false;
    }


  }


  const [skills, skillsSets] = useState([
        { 'name'  : "JavaScript"  , 'image'   : js, "category" : fullStack, "experience" : "3 Year Experience" },
        { 'name'  : "Django"  , 'image'   : django, "category" : fullStack, "experience" : "1 Year Experience" },
        { 'name'  : "React.js"  , 'image'   : reactpng, "category" : frontEnd, "experience" : "1.5 Year Experience" },
        { 'name'  : "Angular"  , 'image'   : angular, "category" : frontEnd, "experience" : "1.5 Year Experience" },
        { 'name'  : "CSS"  , 'image'   : css, "category" : frontEnd, "experience" : "3 Year Experience" },
        { 'name'  : "JQuery"  , 'image'   : jq, "category" : frontEnd, "experience" : "3 Year Experience" },
        { 'name'  : "HTML5"  , 'image'   : hmtl, "category" : frontEnd, "experience" : "3 Year Experience" },
        { 'name'  : "Bootstrap"  , 'image'   : bootstrappng, "category" : frontEnd, "experience" : "3 Year Experience" },
        { 'name'  : "C++"  , 'image'   : cplusspluss, "category" : backEnd, "experience" : "3 Year Experience" },
        { 'name'  : "C#"  , 'image'   : csharp, "category" : backEnd, "experience" : "1 Year Experience" },
        { 'name'  : "C"  , 'image'   : c, "category" : backEnd, "experience" : "4 Year Experience" },
        { 'name'  : "Python"  , 'image'   : python, "category" : backEnd, "experience" : "1 Year Experience" },
        { 'name'  : "Java"  , 'image'   : java, "category" :  backEnd, "experience" : "2 Year Experience"},
        { 'name'  : "node.js"  , 'image'   : nodejs, "category" : backEnd, "experience" : "2.5 Year Experience" },
        { 'name'  : "SQL"  , 'image'   : mongo, "category" : other , "experience" : "3 Year Experience"},
        { 'name'  : "MongoDB"  , 'image'   : mongo, "category" : other, "experience" : "2 Year Experience" },
        { 'name'  : "PostgreSQL"  , 'image'   : postgresql, "category" : other, "experience" : "2 Year Experience" },
        { 'name'  : "Adobe Photoshop"  , 'image'   : PS, "category" : other , "experience" : "1 Year Experience"},
        { 'name'  : "OpenGL"  , 'image'   : PS, "category" : other, "experience" : "1 Year Experience" },


  ]) 

  const [projects, projectSets]  = useState([
      {'name' : 'E-commerce Website', 'video' : grocerrystorevid,  'live' : true , 'tools' : ['Django' ,'Python' ,'JavaScript', 'JQuery', 'PostgreSQL','HTML5', 'CSS', 'Bootstrap'], 'github' : "https://github.com/igorganch/Groccery-Store-Website" ,  'liveurl' : "https://grocerystoreiharproject.herokuapp.com/",   'desc'  : "An e-commerce grocery store where a use is  able to browse through the websites products as well as add items to carts and do guest checkout. " },
      {'name' : 'Blog website', 'video' :  blogvid,  'live' : true , 'tools' : ['Angular' , 'Bootstrap'],'github' : "https://github.com/igorganch/Blog-Website" ,'liveurl' : "https://inspiring-snyder-def874.netlify.app"  ,'desc'  : "A blog website where user's are able post, comment, and use hashtags. There is also an Admin section where the owner can edit and remove posts." },
      {'name' : 'Dealership API', 'video' : dealershipAPI,  'live' : true ,'tools' : ['Node.js' , 'JavaScript', 'HTML5', 'Rest API'], 'github' : "https://github.com/igorganch/dealershipAPI" ,'liveurl' : "https://dealershipapi1.herokuapp.com/", 'desc'  : "This is a simple web app API which retrieves data from database and a user is abl to perform CRUD operations" },
      {'name' : 'Mobile Cashier App', 'video' : cashierApp,  'live' : true , 'tools' : ['Angular' , 'HTML', 'OOP', 'CSS'],'github' : "https://github.com/igorganch/Angular-Cashier-App" , 'liveurl' : "https://heuristic-shannon-eaaa58.netlify.app/", 'desc'  : "This an Angular Ionic mobile app that acts as a cash register which manages restocking, purchases, and purchase histories. " },
      {'name' : 'Connect 4', 'video' : '/url',  'live' : false ,'tools' : ['Java' , 'JavaFX', 'OOP'],'github' : "https://github.com/igorganch/Connect4" ,  'liveurl' : "", 'desc'  : "A 2 Player classic game of connect 4, in order to win a player must a-line 4 of their own red/yellow coloured circles either diagonally, horizontally or vertically." },
      {'name' : 'Inventory Manager', 'video' : '/url',  'live' : false ,'tools' : ['C++' , 'OOP'],'github' : "https://github.com/igorganch/Inventory-Manager" ,  'liveurl' : "", 'desc'  : "This app serves a purpose of keeping track of orders, inventory, and items sold." },
      {'name' : 'Mobile Cashier App C#', 'video' : '/url',  'live' : false , 'tools' : ['C#' , 'OOP', 'Xamrin.Forms'], 'github' : "https://github.com/igorganch/CashierApp" ,  'liveurl' : "", 'desc'  : "A mobile app that acts as a cash register which keeps track of items sold and also allows the user to restock items." },
      {'name' : 'Computer Graphics 4 cubes', 'video' : '/url',  'live' : false ,'tools' : ['C++' , 'OpenGL'], 'github' : "https://github.com/igorganch/3DGraphics" ,  'liveurl' : "", 'desc'  : "This openGL app loads 4 cubes, where the user can assign different textures to the cubes aswell as differrent transformations. The user can also operate the camera using it as a first person perspective." },
      {'name' : 'Computer Graphics 10 cubes', 'video' : '/url',  'live' : false ,'tools' : ['C++' , 'OpenGL'], 'github' : "https://github.com/igorganch/OpenGL10SquaresPerspective" ,  'liveurl' : "", 'desc'  : "This openGL app generates 10 squares, where you can change the camera perspective by zooming in/out and shifting view from left and right." }
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
      items:  2, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1 ,
    }
  };


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
                <p className = "expand aboutMe">About&nbsp; Me</p>
              </Col>

              <Col className= "equal text-center">
             <p className = "expand mySkills">My&nbsp; skills</p>
              </Col>

              <Col className= "equal text-center">
              <p className = "expand myQualif">Projects</p>
              </Col>
              <Col className= "equal text-center">
              <p className = "expand myQualif">Contact</p>
              </Col>
            </Row>
          </div>
        </Container>  

          
   




      </div>
     
    
      
    
        <div className = "aboutPage" >



          <div className ="pushToFront">
          <Container className = "navigationBar">
            <Row className = "navItems">
              <Col className= "equal text-center">
                <p className = "aboutMe">About&nbsp; Me</p>
              </Col>

              <Col className= "equal text-center">
             <p className = "mySkills">My&nbsp; skills</p>
              </Col>

              <Col className= "equal text-center">
              <p className = "myQualif">Projects</p>
              </Col>

            </Row>
          </Container>

        <div class="content">
          
          <div className ="conheaderdivt">
            <h1 className = "conheader">ABOUT ME </h1>   
            <div>
              <div className ="descAbout">
                <hr className = "conHeaderLine"></hr>
                <p className ="contactDesc">Im a fullstack developer located in Ontario Canada in Toronto. <br></br><br></br>I have a crazy passion for coding, cars(german car enuthsiast) as well as lifting weights. 
            During my spare time I love to learn and create apps using diffrent langauges and am currently looking for a position to contribute and expand my abilities in programming.</p>
              </div>
            </div>
          </div>

          <div className ="imgAvatar">
          <div className ="flex-container-e">
            <div className = "flex-item">
                <img className = "zoom images" src ={ig}></img>
            </div>
            <div className = "flex-item">
                <img className = "zoom images" src ={linkedin}></img>
            </div>
            <div className = "flex-item">
                <img className = "zoom images" src ={github}></img>
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

        </div>

        <div className = "skills">
        <Container className = "navigationBar">
            <Row className = "navItems">
              <Col className= "equal text-center">
                <p className = "aboutMe">About&nbsp; Me</p>
              </Col>

              <Col className= "equal text-center">
             <p className = "mySkills">Projects</p>
              </Col>

              <Col className= "equal text-center">
              <p className = "myQualif">Contact</p>
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
              <button className="invis"><p className = "fullStack">Full Stack</p></button>
              </Col>


              <Col className= "equal text-center">
              <button className="invis"><p className = "frontEnd">Front End</p></button>
              </Col>

              <Col className= "equal text-center">
              <button className="invis"><p className = "backEnd">Back End</p></button>
              </Col>
              <Col className= "equal text-center">
              <button className="invis"><p className = "backEnd">Langauges</p></button>
              </Col>

              <Col className= "equal text-center">
              <button className="invis"><p className = "other">Other</p></button>
              </Col>

            </Row>
          </Container>
          

          <div class ="skillsBox">
          <hr className ="conHeaderLine"/>

          {skills.map((skill)=> 
  
            <div className ="skillsChart">
              
              <div className ="flex-container-e skills-item">
                  <div className = "flex-item">
                  <img className = "zoom images"src={skill.image} />

                  </div>

                  <div className = "flex-item">
                      <p className = "skillsP">{skill.name}</p>
                  </div>

                  <div className = "flex-item">
                      <p className = "skillsP">{skill.experience}</p>
                  </div>

              </div>
              <hr className ="conHeaderLine"/>
            </div>
            )}




          


          </div>







        </div>



        <div className = "projects" >
        <Container className = "navigationBar">
            <Row className = "navItems">
              <Col className= "equal text-center">
                <p className = "aboutMe">About&nbsp; Me</p>
              </Col>

              <Col className= "equal text-center">
             <p className = "mySkills">My&nbsp;Skills</p>
              </Col>

              <Col className= "equal text-center">
              <p className = "myQualif">Contact</p>
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
    top: "10%"
  
  
  }}>

        <Carousel   removeArrowOnDeviceType={["tablet", "mobile"]}  responsive={responsive} showDots ={true}     renderButtonGroupOutside={false}
    renderDotsOutside  >
       
            {projects.map((project) => 
           
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
               
              
            )}
        
            

 
          </Carousel>
          </div>
          
          </div> 

          <div className = "contact" >

          <Container className = "navigationBar">
            <Row className = "navItems">
              <Col className= "equal text-center">
                <p className = "aboutMe">About&nbsp; Me</p>
              </Col>

              <Col className= "equal text-center">
             <p className = "mySkills">My&nbsp; skills</p>
              </Col>

              <Col className= "equal text-center">
              <p className = "myQualif">Projects</p>
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
            <button className ="email">Send me an E-mail</button>
            </div>
            <div className ="flex-item">
            <button className ="resume">Resume</button>
            </div>
          </div>





          </div>


        

      </div>
     










           


        
   
     
      
      </div>
  
 
     
     
      
          
  
    
  );
}

export default App;