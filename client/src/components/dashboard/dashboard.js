import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { AccionCard } from './dashboardCard'


export const ListaAcciones = () => {

    const [acciones, setAcciones] = useState([])
    const { usuario } = useContext(AuthContext)
    const { codigo_sesion } = useParams()



    useEffect(() => {
        getAcciones()
        console.log(usuario.nombre_usuario)
    }, [])


    const getAcciones = async () => {


        const probs = await axios.post('/api/acciones/accionesXquest/',
            {
                id_quest: codigo_sesion
            }
        )
            .then(res => { setAcciones(res.data.msg) })
            .catch(error => { setAcciones([]); console.log("error") })



    }


    return (
        <div className='row'>
            <h1>Solicitudes activas: </h1>
            <div className="col-md-2 "></div>

            <div className="col-md-8 ">

                <ul className='list-group list-group-flush'>
                    <div className="row">
                        {
                            acciones.map((accion) => (
                                <AccionCard
                                    accion={accion}
                                    getAcciones={getAcciones}
                                    key={accion.id_metodo_resolucion + accion.id_problema + accion.id_usuario_emisor + accion.id_usuario_receptor}
                                    emisor = {accion.id_usuario_emisor}
                                    receptor = {accion.id_usuario_receptor}
                                    problemaID = {accion.id_problema}

                                />
                            ))


                        }
                    </div>
                </ul>



            </div>


            <div className="col-md-2 "></div>



        </div>
    )
}
