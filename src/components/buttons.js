import React from 'react';

const MyButtons = (props) => {
    
    return ( 
        <div className="row p-3" style={{textAlign:"center"}}>
            <div className="col">
                <button style={props.buttonStyle} onClick={props.getRandomNumber} className="btn btn-success btn-lg">¡ Siguiente !</button>                
            </div>
        </div>
     );
}
 
export default MyButtons;