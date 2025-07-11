import mongoose from 'mongoose';

async function connectionDb(){
    try{
await mongoose.connect(process.env.MONGO_URL)
console.log('MongoDb connected')
}catch(e){
    console.log(e)
}
    }


export default connectionDb