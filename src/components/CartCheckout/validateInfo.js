export default function validateInfo(values) {
    let errors = {}

    if (!values.nombreUser.trim()) {
        errors.nombreUser = "Debe ingresar un nombre"
    }

    if (!values.apellidoUser.trim()) {
        errors.apellidoUser = "Debe ingresar un apellido"
    }

    if (!values.emailUser) {
        errors.emailUser = "Debe ingresar un email"
    } else if (!/\S+@\S+\.\S+/.test(values.emailUser)) {
        errors.emailUser = "El email no es valido"
    }

    if (!values.emailUser2) {
        errors.emailUser2 = "Debe ingresar nuevamente el email"
    } else if (!/\S+@\S+\.\S+/.test(values.emailUser)) {
        errors.emailUser2 = "El email no es valido"
    }

    if (values.emailUser !== values.emailUser2) {
        errors.emailUser = "Los emails no coinciden"
        errors.emailUser2 = "Los emails no coinciden"
    }

    if (!values.telefonoUser.trim()) {
        errors.telefonoUser = "Debe ingresar un telefono"
    }

    if (!values.direccionUser.trim()) {
        errors.direccionUser = "Debe ingresar una direccion"
    }

    if (!values.ciudadUser.trim()) {
        errors.ciudadUser = "Debe ingresar una ciudad"
    }

    if (!values.codPostalUser.trim()) {
        errors.codPostalUser = "Codigo Postal obligatorio"
    }

    if (!values.provinciaUser.trim()) {
        errors.provinciaUser = "Debe ingresar una provincia"
    }
    return errors;
}