import { Router } from 'express'
import multer from 'multer'

import uploadCongig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()
const upload = multer(uploadCongig)

routes.get('/', (request, response) => {
    return response.json({ message: 'API Happy - NextLevelWeek#3 RocketSeat', dev: "VictorEmanuell", contact: "victoremanuellexx@gmail.com" })
})

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;