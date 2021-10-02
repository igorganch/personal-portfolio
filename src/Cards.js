

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Card, Table, Button} from 'react-bootstrap';



import Hello from './Hello.js';
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

function Cards(props){

    const [project, setData ] = useState(props.data);
    return (

        <Card className = "projectCards bg-dark text-white zoom2" >
        <video variant="top" loop onMouseOver={e => e.target.play()} onMouseLeave={e => e.target.pause()}  src={project.video}/>
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>
              {project.desc}
            </Card.Text>

            <div className= "flex-container-git-live">
            {project.live ? (<a href ={project.liveurl}><Button className = "liveButton"variant="danger">Live</Button></a>) : (null)}
            <a href = {project.github}><Button className = "githubButton" variant="primary"><img className = "gitButton" src={github}/></Button></a>
            </div>

          </Card.Body>

        </Card>

    );


}

export default Cards;