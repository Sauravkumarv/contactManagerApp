const express=require('express')
const dotenv=require('dotenv');
const dbConnect = require('./config/dbConnect');
const  router = require('./routes/contactRoute');
const cors=require('cors')
dotenv.config();

const app=express();
dbConnect();

const allowedOrigins = [
  "http://localhost:3000",          
  "https://contact-manager-app-dusky.vercel.app",
  "https://contact-manager-ix9zicijq-sauravkumarvs-projects.vercel.app/"
];


app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed for this origin: " + origin));
    }
  },
}));

app.use(cors({
origin: allowedOrigins,
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api",router)

const port=process.env.PORT || 5009;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})
