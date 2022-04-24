import React, { useState } from 'react'
import ColorPickerComponent from '../color-picker/ColorPickerComponent'
import { FaBeer } from 'react-icons/fa';
import { rgbToHex } from '../utilidades/toHex';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

export const CategoriaForm = ({ getCategorias, sesion, setCreando}) => {

    const [rgb, setColor] = useState({ r: '255', g: '159', b: '00' })

    const [{ok, msg}, setValidation] = useState({ok: true, msg: ''})

    const style = { color: `${rgbToHex(rgb.r) + rgbToHex(rgb.g) + rgbToHex(rgb.b)}`, fontSize: "3em" }

    const [formValues, handleInputChange, reset] = useForm({
        nombre: "",
    })

    const { nombre } = formValues;

    const validarForm = () =>{
        if(nombre.length < 1){
            return{ok: false, msg: "Debe indicar un nombre"}
        }else{
            
            return{ok: true, msg: "Formato correcto."}
        }
    }

    const submitCategoria = async (e) => {
        e.preventDefault();
        console.log(nombre)
        console.log(style)
        const {ok, msg} = validarForm();
         setValidation({ok: ok, msg: msg});

        console.log(ok)
        
        if(ok){
            setCreando(true)
            try {
                const res = await axios.post('http://localhost:5000/api/categorias/crear',
                    {
                        nombre: nombre,
                        color: style.color,
                        id_sesion: sesion
                    });
        
                reset()
                getCategorias()
                setCreando(false)
            } catch (error) {
                console.log(error)
                setValidation({ok: false, msg: error})
            }


        }
    }



    return (
        <div className="container w-100">
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
                            onChange={handleInputChange}
                        />
                    </div>
                    
                    <div>
                    <h5 className='text-white'>Elegir color:</h5>
                        <ColorPickerComponent rgb={rgb} setColor={setColor}></ColorPickerComponent>
                    </div>



                    <div className="form-group m-2">
                        <input
                            type="submit"
                            className="btnSubmit"
                            value="Crear"
                        />
                    </div>

                    
                    {(!ok)&&   <div className="alert alert-danger">
                                {msg}
                        </div>}
                </form>
            </div>
        </div>
    )
}
