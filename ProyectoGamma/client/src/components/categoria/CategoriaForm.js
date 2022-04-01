import React, { useState } from 'react'
import ColorPickerComponent from '../color-picker/ColorPickerComponent'
import { FaBeer } from 'react-icons/fa';
import { rgbToHex } from '../utilidades/toHex';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

export const CategoriaForm = ({getCategorias}) => {

    const [rgb, setColor] = useState({r: '255', g: '159', b: '00'})

    const style = { color: `${rgbToHex(rgb.r)+rgbToHex(rgb.g)+rgbToHex(rgb.b)}`, fontSize: "3em" }

    const [formValues, handleInputChange, reset] = useForm({
        nombre: "",
    })

    const {nombre} = formValues;

    const submitCategoria = async (e) => {
        e.preventDefault();
        console.log(nombre)
        console.log(style)

        
        const res = await axios.post('http://localhost:5000/api/categorias/crear', 
        {
            nombre: nombre,
            color: style.color
        });
        console.log(res)

        reset()
        getCategorias()
    }



  return (
    <div className="container ">
                <div className="col-md-6 login-form-2">
                    <h3>Crear Categoría</h3>
                    <form onSubmit={submitCategoria}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="nombre"
                                name="nombre"
                                value={nombre}
                                onChange ={handleInputChange}
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
