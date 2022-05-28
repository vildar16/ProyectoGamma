import React from 'react'

export const Mensaje = ({mensaje, mostrar, error}) => {
    return (
        <>
            {(mostrar&&error) &&
            <div class="alert alert-danger" role="alert">
                {mensaje}
            </div>}

            {(mostrar&&!error) &&
            
            <div class="alert alert-success" role="alert">
                {mensaje}
            </div>}
        </>
    )
}
