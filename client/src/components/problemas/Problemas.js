import React, { useEffect, useState } from 'react'
import { CategoriaForm } from '../categoria/CategoriaForm'
import { ProblemasForm } from './ProblemasForm'
import { ProblemasLista } from './ProblemasLista'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Problemas = ({ nombreCategoria }) => {

  const problemastest = [
    { a: "asdasda", b: "asdsadsadsa" },
    { a: "asdasda", b: "asdsadsadsa" },
    { a: "asdasda", b: "asdsadsadsa" },
    { a: "asdasda", b: "asdsadsadsa" },
    { a: "asdasda", b: "asdsadsadsa" },
    { a: "asdasda", b: "asdsadsadsa" },


  ]

  const { codigo_categoria } = useParams()

  const [categorias, setCategorias] = useState([])

  const [problemas, setProblemas] = useState([])

  const [cargando, setCargando] = useState(true)

  const [{ nombre_categoria }, setCategoria] = useState({ nombre_categoria: 'Cargando...' })

  

  useEffect(() => {
    getProblemas()
  }, [])
  

  const getProblemas = async () => {
    console.log("asdsad")
    console.log(codigo_categoria)
    
    const sesion = await axios.get('http://localhost:5000/api/categorias/' + codigo_categoria)
      .then(res => { setCategoria({ nombre_categoria: res.data.message[0].nombre }) })
      .catch(error => { setCategorias([]) })
    console.log(sesion)
    setCargando(false);


   const probs = await axios.get('http://localhost:5000/api/problemas/')
      .then(res => { setProblemas(res.data.message) })
      .catch(error => { setProblemas([]) })
    console.log(probs)
    setCargando(false);

  }


  return (

    <>

      <div className="row">

        
      <div className="col-md-3 m-4 div-main div-with-scroll" >
          <h1>Problemas de {nombre_categoria}</h1>
          <ProblemasForm getProblemas={getProblemas}></ProblemasForm>

        </div>


      <div className="col-md-7 div-main" >
        <h1>Problemas</h1>
        <ProblemasLista
          problemasLista={problemas}
        ></ProblemasLista>
        </div>
      </div>
    </>

  )
}
