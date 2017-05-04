import {Router} from 'express'


let router = Router()


router.get('/', function(req, res, next) {
  throw { message: 'Unimplemented! :)' }
})


export default router
