import React, { useState } from 'react'
import ColorPickerComponent from '../color-picker/ColorPickerComponent'
import { FaBeer } from 'react-icons/fa';

export const CategoriaForm = () => {

    const [rgb, setColor] = useState({r: '00', g: '00', b: '00'})

    const style = { color: `#${rgb.r.toString(16)+rgb.g.toString(16)+rgb.b.toString(16)}`, fontSize: "3em" }


    const submitPrueba = async (e) => {
        e.preventDefault();
        
        console.log(style)
    }


  return (
    <div className="container ">
                <div className="col-md-6 login-form-2">
                    <h3>Crear Categoría</h3>
                    <form onSubmit={submitPrueba}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="Nombre"
                            />
                        </div>

                        <ColorPickerComponent rgb={rgb} setColor={setColor}></ColorPickerComponent>

                        <FaBeer style={style}></FaBeer>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Crear Categoría" 
                            />
                        </div>
                    </form>
                </div>
            </div>
  )
}
