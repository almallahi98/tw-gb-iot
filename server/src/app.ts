import exprees, { Request, Response } from 'express'
import { connectionBD } from './context/context.db';
import nodesRouter from './route/nodes.router';
import sensorsRouter from './route/sensors.router';
import userRouter from './route/user.router';
import cros from 'cors'
import nodeData from './route/nodeData.router';
const port=5000;
const app = exprees()
app.use(exprees.json());
connectionBD();
app.use(cros());
app.use('/api/v1/user',userRouter);
app.use('/api/v1/nodes',nodesRouter);
app.use('/api/v1/sensors',sensorsRouter);
app.use('/api/v1/nodeinput',nodeData);

app.listen(port,()=>{
    console.log('server is running on port: '+port);
})