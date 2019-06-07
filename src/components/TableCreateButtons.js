import React from 'react';

const TableCreateButtons = (props) => {
    return ( 
        <div>
            <button onClick={props.llenarTablaRandom}>llena random</button>
            <button>save</button>
        </div>
     );
}
 
export default TableCreateButtons;