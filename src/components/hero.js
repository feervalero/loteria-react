import React from 'react';

const MyHero = (props) => {
    //        <!--<input value = {props.card} />
    
    var last =  function(array, n) {
        if (array == null ) 
          return [];
        if (n == null) 
           return array[array.length - 1];
        return array.slice(Math.max(array.length - n, 0));  
        };
    const arr = last(props.cards,5);
    arr[4] = arr[4]!== undefined ? arr[4] : "98";
    arr[3] = arr[3]!== undefined ? arr[3] : "98";
    arr[2] = arr[2]!== undefined ? arr[2] : "98";
    arr[1] = arr[1]!== undefined ? arr[1] : "98";
    arr[0] = arr[0]!== undefined ? arr[0] : "98";
    const ca = 'http://localhost:3000/cards/'+(parseInt(props.card,10)+1).toString()+'.jpg';
    return (
        <div className="row">
            <div className="col-3 d-flex flex-column" style={{textAlign:"right",opacity:".7"}}>
                <div className="p-2">
                    <img alt="" style={{position:"unset",width:"100%"}} className="rounded" src={'http://localhost:3000/cards/'+(parseInt(arr[4],10)+1).toString()+'.jpg'} />                    
                </div>
                <div className="p-2">
                    <img alt="" style={{position:"unset",width:"100%"}} className="rounded" src={'http://localhost:3000/cards/'+(parseInt(arr[3],10)+1).toString()+'.jpg'} />                    
                </div>
                <div className="p-2">
                    <img alt="" style={{position:"unset",width:"100%"}} className="rounded" src={'http://localhost:3000/cards/'+(parseInt(arr[2],10)+1).toString()+'.jpg'} />                    
                </div>
                <div className="p-2">
                    <img alt="" style={{position:"unset",width:"100%"}} className="rounded" src={'http://localhost:3000/cards/'+(parseInt(arr[1],10)+1).toString()+'.jpg'} />                    
                </div>
            </div>
            <div className="col-6" style={{textAlign:"center"}}>
                <img  alt="" className="rounded" src={ca}  style={{border:"2px solid black",position:"unset",width:"100%"}}/>
            </div>
            <div className="col-3 d-flex flex-column" style={{textAlign:"center"}}>
                <div className="p-2"><span className="badge badge-dark">01</span></div>
                <div className="flex-grow-1"></div>
                <div className="p-2 justify-content-end">
                <button style={{
                    background:"url('http://localhost:3000/refresh.png')",
                    backgroundSize:"cover",
                    borderStyle:"none",
                    height:"50px",
                    width:"50px"
                }} type="button"  className="btn-lg" onClick={props.resetModule}>
                    
                </button>
                </div>
            </div>
        </div>  
     );
}
 
export default MyHero;