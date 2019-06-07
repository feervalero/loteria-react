import React from 'react';

const MyCarousel = (props) => {
    return ( //FIXME: Arreglar el problema con las imagenes que no se ven
        
        <div>
            {props.cards.map(card => {
                
                const ca = 'http://localhost:3000/cards/'+(parseInt(card,10)+1).toString()+'.jpg';
                return (<img src={ca} alt="/public/favicon.ico" />)
            })}
        </div>
     );
}

export default MyCarousel;