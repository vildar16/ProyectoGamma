import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProblemasLista } from '../problemas/ProblemasLista'
import { Globo } from '../puntaje/Globo'
import { Moneda } from '../puntaje/Moneda'
import { UsuarioCatFila } from './UsuarioCatFila'

export const UsuarioPerfil = ({ viendo, viendoNombre, problemas}) => {

    const [viendoProblemas, setViendoProblemas] = useState(false)


    const usuarios = [
        { usuario: 'Mauricio Munoz - 2018319153', categoria: 'Backtracking', monedas: '1', globos: '8' },
        { usuario: 'Mauricio Munoz - 2018319153', categoria: 'Greedy', monedas: '16', globos: '3' },
        { usuario: 'Mauricio Munoz - 2018319153', categoria: 'Proba', monedas: '9', globos: '8' },
        { usuario: 'Mauricio Munoz - 2018319153', categoria: 'Categoriaxd', monedas: '25', globos: '0' },


    ]


    return (
        <>
            <div className="login-form-1 m-1 div-gen perfil div-with-scroll" id='left'>



                <h1>{viendoNombre}</h1>

                <ProblemasLista problemasLista={problemas}></ProblemasLista>

                <br></br>
                <br></br>
                <h1>Tabla Resumen:</h1>
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

                                <UsuarioCatFila
                                    categoria={usuario.categoria}
                                    monedas={usuario.monedas}
                                    globos={usuario.globos}
                                >

                                </UsuarioCatFila>
                            ))


                        }

                    </ul>

                </div>

                

            </div>

        </>
    )
}
