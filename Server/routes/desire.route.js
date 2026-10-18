import {Router} from 'express'
import {create_Desire} from '../controller/desire.controller.js'

const router=Router()

router.route('/create_desire').post(create_Desire)





export {router}