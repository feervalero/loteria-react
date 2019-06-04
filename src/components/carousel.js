import React from 'react';



const MyCarousel = (props) => {
    
    return ( 
        <div>
        
            {props.cards.map(card => <img src={`../cards/${card}.jpg`} />)}
        
        </div>
     );
}
 
export default MyCarousel;