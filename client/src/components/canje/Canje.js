import React from 'react'
import { Globo } from '../puntaje/Globo'
import { Moneda } from '../puntaje/Moneda'
import { CanjeFila } from './CanjeFila'

export const Canje = () => {



    const usuarios = [
        { usuario: 'Mauricio Munoz - 2018319153', categoria: 'Backtracking', monedas: '0', globos: '0' },
        { usuario: 'Mauricio Munoz - 2018319153', categoria: 'Greedy', monedas: '0', globos: '0' },
        { usuario: 'Mauricio Munoz - 2018319153', categoria: 'Proba', monedas: '0', globos: '0' },
        { usuario: 'Mauricio Munoz - 2018319153', categoria: 'Categoriaxd', monedas: '0', globos: '0' },


    ]
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
