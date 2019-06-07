import React from 'react';
import './TableCreatePanel.css';
const TableCreatePanel = (props) => {
    const tabla = props.tabla[0];
    return (
        <table border="" className="createTable">
            <tbody>
                <tr>
                    <td>{tabla.tabla[1]}</td>
                    <td>{tabla.tabla[2]}</td>
                    <td>{tabla.tabla[3]}</td>
                    <td>{tabla.tabla[4]}</td>
                </tr>
                <tr>
                    <td>{tabla.tabla[5]}</td>
                    <td>{tabla.tabla[6]}</td>
                    <td>{tabla.tabla[7]}</td>
                    <td>{tabla.tabla[8]}</td>
                </tr>
                <tr>
                    <td>{tabla.tabla[9]}</td>
                    <td>{tabla.tabla[10]}</td>
                    <td>{tabla.tabla[11]}</td>
                    <td>{tabla.tabla[12]}</td>
                </tr>
                <tr>
                    <td>{tabla.tabla[13]}</td>
                    <td>{tabla.tabla[14]}</td>
                    <td>{tabla.tabla[15]}</td>
                    <td>{tabla.tabla[16]}</td>
                </tr>
            </tbody>
        </table>
    );
}
 
export default TableCreatePanel;