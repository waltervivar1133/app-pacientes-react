import React from 'react'



export const Item = ({ loading,nombres , apellidos, dni, telefono , tipo_sangre, sexo}) => {

 
  return (
    
    <tr className="item__container">
      
        <th>{nombres}</th>
        <th>{apellidos}</th>
        <th>{dni}</th>
        <th>{telefono}</th>
        <th>{tipo_sangre}</th>
        <th style={{ 'color': sexo === 'Femenino'  ?  '#ea899a' : '#027122'}} >{sexo}</th>

      
      
    </tr>
  )
}
