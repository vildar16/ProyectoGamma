import React from 'react'

export const UsuarioCatFila = ({ categoria, monedas, globos }) => {
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
                <h3>{globos}</h3>
            </div>
        </div>
    )
}
