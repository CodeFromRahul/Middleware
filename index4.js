import express from "express";
import bodyParser from 'body-parser'
import { dirname } from "path";
import { fileURLToPath } from "url";
import { BADNAME } from "dns";

var bandname ='';
 
const __dirname = dirname(fileURLToPath(import.meta.url));

function bandNameGenerator(req,res,next){
  bandname = req.body["street"]+req.body["pet"];
  next();
}

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bandNameGenerator);

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html")
})

app.post("/submit",(req,res)=>{
res.send(`<h1> Your Band name is ${bandname}`);

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
