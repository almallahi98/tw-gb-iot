import exprees from 'express'
import { connectionBD } from './context/context.db';
import nodesRouter from './route/nodes.router';
import sensorsRouter from './route/sensors.router';
import userRouter from './route/user.router';
const port=5000;
const app = exprees()
app.use(exprees.json());
connectionBD();

app.use('/api/v1/user',userRouter);
app.use('/api/v1/nodes',nodesRouter);
app.use('/api/v1/sensors',sensorsRouter);


app.listen(port,()=>{
    console.log('server is running on port: '+port);
})