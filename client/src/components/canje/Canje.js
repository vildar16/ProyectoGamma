import React, { useContext, useEffect, useState } from 'react'
import { Globo } from '../puntaje/Globo'
import { Moneda } from '../puntaje/Moneda'
import { CanjeFila } from './CanjeFila'
import axios from 'axios';
import { AuthContext } from '../../auth/authContext'

export const Canje = () => {


    const [usuarios, setUsuarios] = useState([{categoria: '', monedas: '', globos: '' }])
    const { usuario } = useContext(AuthContext)

    useEffect(() => {

        llenarMonedasGlobos()
   
      }, [])

    const llenarMonedasGlobos = async () => { 
        try{

            const res = await axios.post('/api/canje/getCanjes', {id_quest:"8080",id_usuario:"moore"})

            console.log(res.data)



            setUsuarios([res.data])

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
                                            categoria={usuario.categoria}
                                            monedas={usuario.monedas}
                                            globos={usuario.globos}
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
