import logo from './logo.svg';
import ReactDOM from "react-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col, Card, Table, Button} from 'react-bootstrap';



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
  cashierApp

 } from './index.js';
import { useState } from 'react';

function App() {



  const [projects, projectSets]  = useState([
      {'name' : 'E-commerce Website', 'video' : grocerrystorevid,  'live' : true , 'github' : "https://github.com/igorganch/Groccery-Store-Website" ,  'liveurl' : "https://grocerystoreiharproject.herokuapp.com/",   'desc'  : "This project is an e-commerce grocery store developed using Django and storing data using PostgreSQL. In this app you're able to browse through the websites products as well as add items to carts and do guest checkout. " },
      {'name' : 'Blog website', 'video' :  blogvid,  'live' : true , 'github' : "https://github.com/igorganch/Blog-Website" ,'liveurl' : "https://inspiring-snyder-def874.netlify.app"  ,'desc'  : "A blog website where user's are able post, comment, and use hashtags. There is also an Admin section where the owner can edit and remove posts. Developed using bootstrap and Angular" },
      {'name' : 'Dealership API', 'video' : dealershipAPI,  'live' : true , 'github' : "https://github.com/igorganch/dealershipAPI" ,'liveurl' : "https://dealershipapi1.herokuapp.com/", 'desc'  : "This is a simple web app API coded using Node.js,Express, & html which retrieves data from database system using PostgreSQL." },
      {'name' : 'Mobile Cashier App', 'video' : cashierApp,  'live' : true ,'github' : "https://github.com/igorganch/Angular-Cashier-App" , 'liveurl' : "https://heuristic-shannon-eaaa58.netlify.app/", 'desc'  : "This an Angular Ionic mobile app that acts as a cash register which manages restocking, purchases, and purchase histories. This mobile app is developed using Angular and Ionic." },
      {'name' : 'Connect 4', 'video' : '/url',  'live' : false ,'github' : "https://github.com/igorganch/Connect4" ,  'liveurl' : "", 'desc'  : "A 2 Player classic game of connect 4, in order to win a player must a-line 4 of their own red/yellow coloured circles either diagonally, horizontally or vertically. Coded using Java and JavaFX for the user interface." },
      {'name' : 'Inventory Manager', 'video' : '/url',  'live' : false ,'github' : "https://github.com/igorganch/Inventory-Manager" ,  'liveurl' : "", 'desc'  : "This app serves a purpose of keeping track of orders, inventory, and items sold. Coded with C++ using concepts of OOP with inheritance using dynamic memory, File streams which saves the data every time the program is exited." },
      {'name' : 'Mobile Cashier App C#', 'video' : '/url',  'live' : false ,'github' : "https://github.com/igorganch/CashierApp" ,  'liveurl' : "", 'desc'  : "A mobile app that acts as a cash register which keeps track of items sold and also allows the user to restock items. Developed with Xamarin.Forms as the front end and C# as the backend. This project Uses concepts of OOP combined with data structures." },
      {'name' : 'Computer Graphics 4 cubes', 'video' : '/url',  'live' : false ,'github' : "https://github.com/igorganch/3DGraphics" ,  'liveurl' : "", 'desc'  : "This openGL app loads 4 cubes, where the user can assign different textures to the cubes aswell as differrent transformations. The user can also operate the camera using it as a first person perspective." },
      {'name' : 'Computer Graphics 10 cubes', 'video' : '/url',  'live' : false ,'github' : "https://github.com/igorganch/OpenGL10SquaresPerspective" ,  'liveurl' : "", 'desc'  : "This openGL app generates 10 squares, where you can change the camera perspective by zooming in/out and shifting view from left and right." }
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
        <Row className="myBox">
            <div class="drawing-borders" id="box">
                <p className = "myName">IHAR &nbsp; GANCHARENKA</p>
            </div>
        </Row>
          
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
            </Row>
          </div>
        </Container>  

          
   




      </div>
     
    
      
    
        <div className = "aboutPage" >
          
 
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





  
          
        <div class = "flex-container meMyself">

 
          <h1 className = "zoom me">Me, &nbsp; Myself, &nbsp; &#38;&nbsp;and&nbsp;I!</h1>
  
        </div> 
        
       
        <div className ="flex-container description">
          <div className = "flex-item desc ">
            <h2 className = "description">Im a fullstack developer located in Ontario Canada in Toronto. <br></br><br></br>I have a crazy passion for coding, cars(german car enuthsiast) as well as lifting weights. 
            During my spare time I love to learn and create apps using diffrent langauges and am currently looking for a position to contribute and expand my abilities in programming.
            </h2> 
           
            <div className ="flex-container">
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

        </div>

        <div className = "flex-item skillT">
         <Card className ="skills">
            <Card.Body>
              <Card.Title className ="text-dark">What I know... </Card.Title>
             
                <Table bordered className = "skillsTable">
                    <thead>
                      <tr>
                          <th style={{  width : "8vmin", height: "4vmin"}}>Full Stack</th>
                          <th style={{  width : "8vmin", height: "4vmin"}}>Front End</th>
                          <th style={{  width : "8vmin", height: "4vmin"}}>Backend End</th>
                          <th style={{  width : "8vmin", height: "4vmin"}} >Other</th>
                          
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{  width : "8vmin", height: "8vmin"}}>
                        <td align="center"><img className = "zoom images"src={django}/></td>   {/*Full Stack*/}
                        <td align="center"><img className = "zoom images"src={bootstrappng} /></td> {/*Front end*/}
                        <td align="center"><img className = "zoom images"src={c} /></td>  {/*back end*/}
                        <td align="center"><img className = "zoom images"src={PS} /></td> {/*other*/}
                      </tr>
                      <tr>
                        <td align="center"><img className = "zoom images"src={js} /></td>  {/*Full Stack*/}
                        <td align="center"><img className = "zoom images"src={hmtl} /></td> {/*Front end*/}
                        <td align="center"> <img className = "zoom images"src={java} /> </td> {/*back end*/}
                        <td align="center"><img className = "zoom images"src={postgresql} /></td>  {/*other*/}
                      </tr>

                      <tr>
                        <td></td>  {/*Full Stack*/}
                        <td align="center"><img className = "zoom images"src={css} /></td> {/*Front end*/}
                        <td align="center"><img className = "zoom images"src={nodejs}/></td> {/*back end*/}
                        <td align="center"><img className = "zoom images"src={mongo} /></td>  {/*other*/}
                      </tr>

                      <tr>
                        <td align="center"></td>  {/*Full Stack*/}
                        <td align="center"><img className = "zoom images"src={angular} /></td> {/*Front end*/}
                        <td align="center"><img className = "zoom images"src={cplusspluss}/> </td> {/*back end*/}
                        <td></td>  {/*other*/}
                      </tr>
                      <tr>
                        <td></td>  {/*Full Stack*/}
                        <td align="center"><img className = "zoom images"src={reactpng}/></td> {/*Front end*/}
                        <td align="center"><img className = "zoom images"src={csharp}/></td> {/*back end*/}
                        <td align="center"></td>  {/*other*/}
                      </tr>
                    </tbody>
                  </Table>


            </Card.Body>
          </Card>
        </div>

        </div>

        </div>

        <div className = "projects" >
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




          <div className= "middle">
          <hr className = "projHeaderLine"></hr>
          <h1 className = "projHeader">Projects</h1>
          <hr className = "projHeaderLine"></hr>
          </div>
          <div   style={{
    paddingBottom: '30px',
    position: 'relative',
  
  
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

                    <div className= "flex-container-git-live">
                    {project.live ? (<a href ={project.liveurl}><Button className = "liveButton"variant="danger">Live</Button></a>) : (null)}
                    <a href = {project.github}><Button className = "githubButton" variant="primary"><img className = "gitButton" src={github}/></Button></a>
                    </div>

                  </Card.Body>
      
                </Card>
               
              
            )}
        
            

 
          </Carousel>
          </div>
          
          </div> 
            
              
         

     










           


        
   
     
      
      </div>
  
 
     
     
      
          
  
    
  );
}

export default App;