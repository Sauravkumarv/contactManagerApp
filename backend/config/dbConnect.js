const mongoose=require('mongoose')
const dotenv=require('dotenv');
dotenv.config();

const dbConnect=async()=>{
  try {
    const connect=await mongoose.connect(process.env.MONGO_URL)
   console.log("mongo Connected Successfully")
  } catch (error) {
    return console.log("mongo connection failed",error)
  }
}

module.exports=dbConnect;