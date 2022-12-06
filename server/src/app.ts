import exprees from 'express'
const port=5000;

const app = exprees()
app.use(exprees.json());

app.listen(port,()=>{
    console.log('server is running on port: '+port);
    
})