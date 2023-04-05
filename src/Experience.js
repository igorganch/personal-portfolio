import "./App.css"
import React, { useState, useEffect , setState, useContext} from 'react';
import { Container, Row, Col, Card, Table, Button, Badge} from 'react-bootstrap';
import {Link} from 'react-scroll';
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
 


 } from './index.js';


class Experience extends React.Component{

  
  
  
    componentDidMount () {
    
      var expand =    document.querySelectorAll(".moveBackExperience");

      var secClick = document.querySelectorAll(".moveBackExperience");
      var lines = document.querySelectorAll(".exphr");
      var addHeight = 0;
      expand[0].querySelector(".jobSkillExp").hidden = false;
      var current =  expand[0];
      for (var i = 0; i < expand.length; i++) {
        var cssMove;
        if(expand[i] != current){
         cssMove = "position:absolute; transform: translateY(" + addHeight +"px); cursor: pointer;";
        }
        else{
          cssMove = "position:absolute; transform: translateY(" + addHeight +"px); ";
        }



        addHeight +=  expand[i].offsetHeight;
        console.log("addHeight-" + addHeight)
        expand[i].style.cssText += cssMove;
        expand[i].addEventListener("click", mouseOver);
        expand[i].addEventListener("touchstart", mouseOver);


     }
     
     
      
      var choosen = expand[0]; 
      var defaultHeight = expand[0].offsetHeight;

      function mouseOver(e){

        if(e.currentTarget != choosen){
        console.log(e.currentTarget)
        var tf = false;
        var expand = document.querySelectorAll(".moveBackExperience");
        var addHeight_ = 0;

        for(var i = 0 ; i < expand.length; i++){
          expand[i].querySelector(".jobSkillExp").hidden = true;
          const cssMove = "position:absolute; transform: translateY(" + addHeight_ +"px); transition: all ease 200ms; cursor: pointer;";
          expand[i].style.cssText += cssMove;
          addHeight_ +=  expand[i].offsetHeight;
        }
        addHeight_ = 0;

        for(var i = 0 ; i < expand.length; i++){
          if(expand[i] == e.currentTarget && tf == false ){
            const cssMove = "cursor: default;";
            expand[i].style.cssText += cssMove;
            console.log(addHeight_ + "inside 1st");
            choosen = expand[i];
            expand[i].querySelector(".jobSkillExp").hidden = false;
            addHeight_ +=  expand[i].offsetHeight;
            tf = true;
          }
          else{
            const cssMove = "position:absolute; transform: translateY(" + addHeight_ +"px); transition: all ease 200ms; cursor: pointer;";
            expand[i].style.cssText += cssMove;
            addHeight_ +=  expand[i].offsetHeight;
            console.log("addHeight-" + addHeight_)

          
          }

        }
      }

        
      }
      function mouseOut(e){
        
        var expand = document.querySelectorAll(".moveBackExperience");
        choosen.querySelector(".jobSkillExp").hidden = true;
        var addHeight = 0;

        for(var i = 0 ; i < expand.length; i++){
          const cssMove = "position:absolute; transform: translateY(" + addHeight +"px); transition: all ease 500ms;";
          expand[i].style.cssText += cssMove;
          addHeight +=  expand[i].offsetHeight;
          expand[i].addEventListener("mouseover", mouseOver);
          expand[i].addEventListener("mouseout", mouseOut);
          

        }
        
      }
    }
  
render(){

    return(
                 <div id="expereince" className = "expereince">
        <Container className = "navigationBar">
            <Row className = "navItems">
              <Col className= "equal text-center">
                <p className = "aboutMe"><Link to ="aboutPage" >About </Link></p>
              </Col>

              <Col className= "equal text-center">
             <p className = "mySkills"><Link to ="skillsPage" >My&nbsp; skills</Link></p>
              </Col>

              <Col className= "equal text-center">
                <p className = "aboutMe"><Link to ="projectsPage" >Projects</Link></p>
              </Col>

              <Col className= "equal text-center">
              <p className = "cont"><Link to ="contactPage" >Contact</Link></p>
              </Col>

            </Row>
          </Container>

 




        
          <div className ="setmiddle1">
            <h1 className = "conheader">Experience </h1>  
            
          </div>

          <div id = "job1"className = "moveBackExperience">
          <div className="sor">
          <hr className='projHeaderLine1 exphr'></hr> 
          </div>
          
            <div className = "FlexJob">
              <div className="jobcentertext">
              Full Stack Developer Intern
              </div>
              <div className="jobcentertext2">
              Kiuloper
              </div>
              <div className="jobcentertext3">
              January 2022 - April 2022
              </div>
            </div>
            <div  hidden className="jobSkillExp">
              
                <div className="FlexSkillsExp">
                  <img className = "zoom images"src={css} />
                  <img className = "zoom images"src={hmtl} />
                  <img className = "zoom images"src={js} />
                  <img className = "zoom images"src={jq} />
                  <img className = "zoom images"src={PHP} />
                  <img className = "zoom images"src={reactpng} />
                  <img className = "zoom images"src={nodejs} />
                </div>
                <div className="jobDescriptiontext">
                • Developed fully responsive UI interfaces using CSS, HTML, JavaScript, JQuery, DOM, PHP, & React for a client<br></br>
                • Developed API routes using Node.js, Express.js & AWS to send information from the database to the front-end <br></br>
                • Created web page sessions/cookies that travel across web pages used to query data from the database to bring  information to the front-end <br></br> 
                • Contributed ideas & solutions to create more efficient/organized code for web pages<br></br>
                • Worked with phpMyAdmin

              </div>
  
            </div>

            
          </div>


            <div id = "job2"className = "moveBackExperience">
          <div className="sor1">
          <hr className='expHeaderLine exphr'></hr>
          </div>
          
            <div className = "FlexJob">
              <div className="jobcentertext">
             Freelance Web Developer
              </div>
              <div className="jobcentertext2">
                IlikeIT
              </div>
              <div className="jobcentertext3">
            January 2023 - Present
              </div>
            </div>
            <div  hidden className="jobSkillExp">
              
                <div className="FlexSkillsExp">
                  <img className = "zoom images"src={css} />
                  <img className = "zoom images"src={hmtl} />
                  <img className = "zoom images"src={js} />
                  <img className = "zoom images"src={jq} />
                  <img className = "zoom images"src={sql} />
                  <img className = "zoom images"src={nodejs} />
                </div>
                <div className="jobDescriptiontext">
                • Developed websites utilizing HTML, CSS, Javascript, JQuery, Ajax, JSON, REST API’s, Node.js, Express.js, SQL, PostgreSQL, Database Designing and Stripe Payments to meet my clients needs.<br></br>
                • Followed standard industry web development methodologies by adhering to proven design specifications and design techniques to ensure the client receives a quality website.<br></br>
                • Designed modern, clean, fully responsive user interfaces for clients.<br></br>

              </div>
  
            </div>

            
          </div>

        



          <div id = "job3"className = "moveBackExperience">
          <div className="sor1">
          <hr className='expHeaderLine exphr'></hr>
          </div>
            <div className = "FlexJob">
              <div className="jobcentertext">
              Used Car Dealership Assistant
              </div>
              <div className="jobcentertext2">
              VG Automobiles
              </div>
              <div className="jobcentertext3">
              April 2015  -  Present
              </div>
            </div>
            <div  hidden className="jobSkillExp">
              
                <div className="FlexSkillsExp1">
                  <img className = "zoom images"src={css} />
                  <img className = "zoom images"src={hmtl} />
                </div>
                <div className="jobDescriptiontext">
                • Consistently managing the website/updating new arrivals to the website, performing market research <br></br>
                •Preparing vehicles for presentation to customers, performing minor repairs & detailing, moving vehicles as required and other duties as assigned<br></br>

              </div>
            </div>

            
          </div>


          <div  id = "job4" className = "moveBackExperience">
          <div className="sor1">
          <hr className='expHeaderLine exphr'></hr>
          </div>
            <div className = "FlexJob">
              <div className="jobcentertext">
              CO-OP Position
              </div>
              <div className="jobcentertext2">
              HC Automotive
              </div>
              <div className="jobcentertext3">
              January 2018  - June 2018
              </div>
            </div>
            <div  hidden className="jobSkillExp">
            <div className="FlexSkillsExp">
   
                </div>
                <div className="jobDescriptiontext">
                • Consistently managed my time during maintenance in a fast paced environment to minimize waiting lines<br></br>
                • Worked with a team of highly trained professionals to service vehicles <br></br>
                • Performed over 100 vehicle safety inspections and emission tests<br></br>
              </div>
            </div>
            
          </div>

 


        </div>
    );
}  
  
}
export default Experience;

    
  
  
  
  
  
  
  
  
