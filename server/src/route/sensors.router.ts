import expess from 'express';
import { addNodeSensor, deleteNodeSensor, getAllNodeSenor, updateNodeSensor } from '../controllers/sensor.controller';

const sensorsRouter=expess.Router();

sensorsRouter.get('/getseneors/:id',getAllNodeSenor);
sensorsRouter.post('/addnewsensor',addNodeSensor);
sensorsRouter.put('/updatesensor/:id',updateNodeSensor);
sensorsRouter.delete('/deletesenosr/:id',deleteNodeSensor);


export default sensorsRouter;
