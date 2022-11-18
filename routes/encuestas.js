const { Router } = require('express')
const router = Router() //Obtener la función Router

const{getencuesta, postencuesta, deleteencuesta, putencuesta, patchencuesta} = require('../controllers/encuesta')

router.get('/', getencuesta)
router.post('/', postencuesta)
router.put('/', putencuesta)
router.patch('/', patchencuesta)
router.delete('/', deleteencuesta)

//exportar modulo
module.exports = router
