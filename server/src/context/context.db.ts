import { PrismaClient } from "@prisma/client";

const dbcontext= new PrismaClient({log:['query'],errorFormat:'pretty'});
const connectionBD=async()=>{
try{
    await dbcontext.$connect();
    console.log('Db connacted..');
    
}
catch(err){
    console.log(err);
    process.exit(1);
    
}
}
export{dbcontext,connectionBD};