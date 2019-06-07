import React, { Component } from 'react';
import TableCreatePanel from '../components/tableCreatePanel';
import TableCreateButtons from '../components/TableCreateButtons';

class Tablas extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    componentDidMount = () =>{
    localStorage.setItem("tablas",JSON.stringify([{name:"1"},{name:"2"}]));
        const tablas = JSON.parse(localStorage.getItem("tablas"));
        
        this.setState(
            {tablas:[
                {tabla:["name",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]},
                {tabla:["name",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
            ]
            });
        
    }
    llenarTablaRandom = (tableName) => {
        const arr = [tableName];
        for(var i=1;i<=16;i++){
            let randomNumber = (Math.floor(Math.random() * Math.floor(54)));
            arr.push(randomNumber);
            //TODO: Revisar que no se creen duplicados mas que 1
        }
        this.setState({tablas:
            [{tabla:arr},{tabla:arr}]
            }); 
    }
    agregarValorAArray = (tableName,posicion, valor) =>{
        //FIXME: Arreglar el por que no permite dar click, se queda en un loop
        const arr = this.state.tabla;
        arr[posicion]=valor;

        this.setState({tabla:arr});
        
        console.log(this.state);
    }
    borrarValorAArray = (posicion) =>{

    }
    guardarTabla = () =>{

    }
    render() { 
        if(this.state.tablas){
        return ( 
            <div>
                <TableCreatePanel tabla={this.state.tablas} /> 
                <TableCreateButtons llenarTablaRandom={this.llenarTablaRandom} />
                <button >Agrega 9 1</button>
            </div>
        );
        } return(<h1>ERROR</h1>)
    }
    
}
 
export default Tablas;