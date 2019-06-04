import React from 'react';

const MyButtons = (props) => {
    
    return ( 
        <div>
            <button style={props.buttonStyle} onClick={props.getRandomNumber}>RANDOM</button>
            <button onClick={props.resetModule}>RESET</button>
        </div>
     );
}
 
export default MyButtons;