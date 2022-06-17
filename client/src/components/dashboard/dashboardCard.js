import React from 'react'
import { BsArrowDownSquareFill, BsSearch, BsAwardFill, BsExclamationOctagonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { ProblemasLista } from '../problemas/ProblemasLista'

export const AccionCard = ({ accion, getAcciones, emisor, receptor, problemaID }) => {


    return (
        <div className="col-md-8 login-form-1 m-1">

            <div className='mt-4'>
                <h3>
                    {(accion.id_metodo_resolucion === 1) && emisor + " está explorando problemas."}
                    {(accion.id_metodo_resolucion === 2) && emisor + " está atacando a: " + receptor}
                    {(accion.id_metodo_resolucion === 3 && emisor !== receptor) && emisor + " está ayudando a: " + receptor}
                    {(accion.id_metodo_resolucion === 4) && emisor + " está resolviendo problemas por su cuenta."}
                    {(accion.id_metodo_resolucion === 3 && emisor === receptor) && emisor + " está solicitando ayuda con un problema."}
                </h3>

            </div>

            <br></br>
            <div className="d-flex  justify-content-center">

                {(accion.id_metodo_resolucion === 1) && <BsSearch style={{ color: 'red', fontSize: "4em" }} />}
                {(accion.id_metodo_resolucion === 2) && <BsExclamationOctagonFill style={{ color: 'yellow', fontSize: "4em" }} />}
                {(accion.id_metodo_resolucion === 3) && <BsArrowDownSquareFill style={{ color: 'green', fontSize: "4em" }} />}
                {(accion.id_metodo_resolucion === 4) && <BsAwardFill style={{ color: 'red', fontSize: "4em" }} />}


            </div>



        </div>

    )
}
