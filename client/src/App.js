import { useEffect, useReducer } from "react"
import { AuthContext } from "./auth/authContext"
import { authReducer } from "./auth/authReducer"
import { AppRouter } from "./routers/AppRouter"


const init = () => {
  return JSON.parse(localStorage.getItem('usuario'))  || {logged: false};
}


export const App = () => {

  const [ usuario , dispatch] = useReducer( authReducer, {}, init )

  useEffect(() => {
    if (!usuario) return;
  
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }, [usuario])
  
  return (

    <AuthContext.Provider value={{usuario, dispatch}}>
      <style>{'body {background-color: #7cdbd5;'}</style>

      <AppRouter>
        
      </AppRouter>

    </AuthContext.Provider>
  )
}
