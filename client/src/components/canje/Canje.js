import React, { useContext, useEffect, useState } from 'react'
import { Globo } from '../puntaje/Globo'
import { Moneda } from '../puntaje/Moneda'
import { CanjeFila } from './CanjeFila'
import axios from 'axios';
import { AuthContext } from '../../auth/authContext'

export const Canje = () => {


    const [usuarios, setUsuarios] = useState([{id_quest:'', id_categoria:'',nombre_categoria:'', id_usuario:'', globos:'', monedas:''}])
    const { usuario } = useContext(AuthContext)

    useEffect(() => {

        llenarMonedasGlobos()
   
      }, [])

    const llenarMonedasGlobos = async () => { 
        try{

            const res = await axios.post('/api/canje/getCanjes', {id_quest:usuario.id_quest,id_usuario:usuario.id_usuario})

            console.log(res.data)



            setUsuarios(res.data)

        }
        catch(e){
            setUsuarios([])
            console.log(e)

        }



    }


    return (
        <div>
            <div>
                <h1>Canje</h1>
                <div className="row">

                    <div className="col-md-3"></div>
                    <div className="col-md-6">


                        <div className="row">
                            <div className="col casilla header header-left d-flex align-items-center">
                                <h2>
                                    Categoría
                                </h2>

                            </div>

                            <div className="col casilla header">
                                <Moneda color={'#ED25F5'}></Moneda>
                            </div>

                            <div className="col casilla header header-right">
                                <Globo color={'#ED25F5'}></Globo></div>
                            <div className="w-100"></div>


                            <ul>
                                {
                                    usuarios.map((usuario) => (

                                        <CanjeFila
                                            categoria={usuario.nombre_categoria}
                                            monedas={usuario.monedas}
                                            globos={usuario.globos}
                                            sesion={usuario.id_quest}
                                            id_categoria={usuario.id_categoria}
                                            id_usuario={usuario.id_usuario}
                                        >

                                        </CanjeFila>
                                    ))


                                }

                            </ul>



                        </div>
                    </div>
                    <div className="col-md-3"></div>

                </div>

            </div>


        </div>
    )
}
