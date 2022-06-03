import React from 'react'

export const CanjeFila = ({ categoria, monedas, globos }) => {
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

                    <button className="btn btn-success">
                        Comprar
                    </button>
                    Precio: 1
                </div>
            </div>
            </div>
        </div>
    )

}


