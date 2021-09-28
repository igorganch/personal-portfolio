import { useState } from "react";


function Counter(props){
    const [number, counter]  = useState(1);

    function addOne(e){

        counter( prevcounter => prevcounter +1 );

    }

    return(
        <button onClick = {addOne}>Num of clicks {number}</button>
    );

}

export default Counter