const router=require('express').Router()
const logRegController= require('../controllers/logReg.controller')

router.get('/',logRegController.index)
router.get('/getregister',logRegController.getRegister)
router.post('/register',logRegController.register)
router.get('/getlogin',logRegController.getLogin)
router.post('/login', logRegController.login)

module.exports=router