const  express = require("express")
const mongoose =require('mongoose');
const router = require("./routes/productroute");
const app = express();


mongoose.connect("mongodb://127.0.0.1/nodeapp", {useNewUrlParser:true , useUnifiedTopology:true})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());





app.use("/prod",router)






app.listen(5006,()=>{
    console.log("server running");
})

