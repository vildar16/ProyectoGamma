import React from 'react'
import { Globo } from '../puntaje/Globo'
import { Moneda } from '../puntaje/Moneda'
import { UsuarioCatFila } from './UsuarioCatFila'

export const UsuarioPerfil = () => {




    const usuarios = [
        { usuario: 'Mauricio Munoz - 2018319153', categoria: 'Backtracking', monedas: '1', globos: '8' },
        { usuario: 'Mauricio Munoz - 2018319153', categoria: 'Greedy', monedas: '16', globos: '3' },
        { usuario: 'Mauricio Munoz - 2018319153', categoria: 'Proba', monedas: '9', globos: '8' },
        { usuario: 'Mauricio Munoz - 2018319153', categoria: 'Categoriaxd', monedas: '25', globos: '0' },
        

    ]


    return (
        <>
            <div className="login-form-1 m-1 div-gen perfil div-with-scroll" id='left'>
                <h1>Mauricio Munoz - 2018319153</h1>
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
