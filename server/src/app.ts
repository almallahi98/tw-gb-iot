import exprees from 'express'
import { connectionBD } from './context/context.db';
const port=5000;
const app = exprees()
app.use(exprees.json());
connectionBD();



app.listen(port,()=>{
    console.log('server is running on port: '+port);
})