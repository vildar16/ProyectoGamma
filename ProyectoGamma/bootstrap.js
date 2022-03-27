const { CLIENT_IGNORE_SIGPIPE } = require('mysql/lib/protocol/constants/client')
const categoria = require('./models/categoria')

module.exports = async () => {

    const Usuario = require('./models/usuario')
    const Categoria = require('./models/categoria')

    const errHandler = (err) => {
        console.error("Error", err);
    }

    /*
    const user = await Usuario.create({
        nombre_usuario: "testeando",
        nombre: "tester",
        apellido1: "testino",
        apellido2: "testamento",
        correo: "test@gmail.com",
        password: "testpass",
        id_tipo_usuario: "1"
    }).catch(errHandler);
*/
    const categoria = await Categoria.create({
        nombre: "testeando",
        color: "FFFFFF",
    }).catch(errHandler);


}