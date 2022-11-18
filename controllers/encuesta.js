const encuesta = require('../models/encuesta')

//get obtener toda la informacion
const getencuesta = async(req, res) => {
    const encuesta1= await encuesta.find()

    res.json ({
        msg: 'Encuesta GET API',
        encuesta1
    })

}

//insercion de datos 
const postencuesta = async(req, res) => {
   
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    
    const encuesta1 = new encuesta({nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado})
    await encuesta1.save() 

    res.json({
        msg: 'Encuesta POST API',
        encuesta1
    })
}

//PUT
const putencuesta = async (req, res) => {
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    const encuesta1 = await encuesta.findOneAndUpdate({nombreEncuesta:nombreEncuesta},{ fecha:fecha, documentoEncuestado:documentoEncuestado, nombreEncuestado:nombreEncuestado, edad:edad, genero:genero, empleado:empleado})

    res.json({
        msg: 'Encuesta PUT API',
        encuesta1
    })
}

//PATCH:Modificación parcial
const patchencuesta = async (req, res) => {
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    const encuesta1 = await encuesta.findOneAndUpdate({nombreEncuesta: nombreEncuesta},{documentoEncuestado:documentoEncuestado})

    res.json({
        msg: 'Encuesta Patch API',
        encuesta1
    })
}

//DELETE
const deleteencuesta = async(req, res) => {
    const { nombreEncuesta } = req.query

    const encuesta1 = await encuesta.findOneAndDelete({nombreEncuesta:nombreEncuesta})

    res.json({
        msg: 'Encuesta DELETE API',
        encuesta1
    })
}


module.exports = {
    getencuesta,
    postencuesta,
    putencuesta,
    patchencuesta,
    deleteencuesta
}