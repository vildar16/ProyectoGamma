import React from 'react'

export const ProblemasForm = () => {
  return (
    
    <div className="container w-100">
    <div className="col-md-6 login-form-2">
        <h3>Crear Problema</h3>
        <form >
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="nombre"
                    name="nombre"
                   
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="link"
                    name="link"
                   
                />
            </div>

            
                
            
            <div className="form-group m-2">
                <input
                    type="submit"
                    className="btnSubmit"
                    value="Crear"
                />
            </div>

            
           
        </form>
    </div>
</div>
  )
}
