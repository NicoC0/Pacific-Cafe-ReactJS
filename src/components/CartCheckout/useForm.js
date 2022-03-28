import { useState, useEffect } from 'react'
import validateInfo from './validateInfo'

const useForm = validateInfo => {
    const [values, setValues] = useState({
        nombreUser: "",
        apellidoUser:"",
        emailUser: "",
        emailUser2: "",
        telefonoUser: "",
        direccionUser: "",
        ciudadUser: "",
        codPostalUser: "",
        provinciaUser: ""
    })

    const [errors, setErrors] = useState({})
    const [submit, setSubmit] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateInfo(values))
        setSubmit(true)
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return { handleChange, handleSubmit, values, errors, submit }
}

export default useForm;