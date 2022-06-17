import axios from 'axios'
import React, { useEffect, useState } from 'react'
export const CanjeFila = ({ categoria, monedas, globos, sesion, id_categoria, id_usuario }) => {


    const [{precio}, setPrecio] = useState({precio:''})

    useEffect(() => {

        precioGlobo()
   
      }, [])

    const comprar = async () => {

        const res = await axios.put('/api/canje/globos', {id_sesion: sesion, id_categoria: id_categoria, id_usuario: id_usuario})
        window.location.reload(false)


    }

    const precioGlobo = async () => {

            const res = await axios.post('/api/canje/precioGlobo', {id_sesion: "8080", id_categoria: "56"})
            setPrecio({precio:res.data.msg})


    }


  return (
        <div className="row">
            <div className="w-100"></div>
            <div className="col casilla categoria">
                <h3>{categoria}</h3>

            </div>
            <div className="col casilla">
                <h3>{monedas}</h3>
            </div>
            <div className="col casilla">
            <div className="row">
                <div className="col-md-6">

                    <h3>{globos}</h3>
                </div>
                <div className="col-md-6">

                    <button className="btn btn-success" onClick = {comprar}>
                        Comprar
                    </button>
                    Precio: {precio}
                </div>
            </div>
            </div>
        </div>
    )

}


