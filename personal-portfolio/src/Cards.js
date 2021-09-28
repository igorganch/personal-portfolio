

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Card, Table, Carousel} from 'react-bootstrap';

function Cards(props){

    const [projects, setData ] = useState(props.data);

        
        /*
        const cards =( 



        );
        for (var i = 0 ;  i  < project.length; i++){
            if ( i == 0 || i == 4 || i ==4 ){
                cards = <Carousel.Item> 



            }

        }



*/

    
    function compare(index){
    if ((index % 4) == 0){
        return true;
    }
    else {
        return false
    }
    }    
    return (
null
    );


}

export default Cards;