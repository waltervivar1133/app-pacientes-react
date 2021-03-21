import React, { useEffect, useState } from 'react'
import { getData } from '../../api/get'
import { Item } from '../item/Item'
import { Loader } from '../loader/Loader'

export const ListGroup = () => {

const [pacientes, setpacientes] = useState([])
const [loading, setLoading] = useState(false);

useEffect(() => {
  getPacientes()
},[])

const getPacientes = () => { 

  getData().then( res => {
  let data = res.data;
  setpacientes(data)
  setLoading(true)
})}



  return (

    <div className="listgroup__container">
      <div className="listgroup__container__block">
        <h1 className="listgroup__title">Lista de Pacientes</h1>
          <table className="listgroup__table">
            <thead>
              <tr className="col">
                <th >Nombre</th>
                <th >Apellido</th>
                <th >DNI</th>
                <th >Celular</th>
                <th>Tipo de Sangre</th>
                <th>Sexo</th>
              </tr>
            </thead>
            
            <tbody>
         
                  
              {
                loading === false ? 
                
                <Loader/>
                
                :
                pacientes.map( (pacientes , key ) => 
                
                  <Item 
                    key={key}
                    {...pacientes}
                  />
                
                )
              }
            </tbody>
           
           
        </table>
      </div>
    </div>
  )
}
