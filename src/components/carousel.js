import React from 'react';
import { useSpring,animated } from "react-spring";

const MyCarousel = (props) => {

    

    const fade = useSpring({opacity: props.toggle ? 1 : 0});

    console.log(fade);
    var last =  function(array, n) {
        if (array == null) 
          return void 0;
        if (n == null) 
           return array[array.length - 1];
        return array.slice(Math.max(array.length - n, 0));  
        };
    const arr = last(props.cards,1);
    arr[0] = arr[0]!== undefined ? arr[0] : "98" ;
    const ca = arr === [] ? '98' : 'http://localhost:3000/cards/'+(parseInt(arr[0],10)+1).toString()+'.jpg';
    return (
        //<img src={ca} alt="/public/favicon.ico" />
        <div className="row p-2" style={{backgroundColor:"#393"}}>
            <div className="col"></div>
            <animated.div  style={fade} className="col-8 d-flex justify-content-center">
                <img alt="" src={ca} style={{maxHeight:"15vh"}} className="rounded"/>
            </animated.div>
            <div className="col" style={{textAlign:"right"}}></div>
        </div> 
    )

}

export default MyCarousel;