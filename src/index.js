const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const body_Parser = require("body-parser");

require("./../helpers/helpers");

const port= process.env.PORT || process.env.port || "3000";
const currect_directory =  path.join(__dirname,"../public");
const partials = path.join(__dirname,"../partials");
app.use(express.static(currect_directory));
app.use(body_Parser.urlencoded({extended: false}));
hbs.registerPartials(partials);
app.set("view engine", "hbs");


app.get("/",(req,res)=>{
    res.render("index",{
        Estudiante:"Carlos Silva",
    });
});

app.post("/calculos",(req,res)=>{
    console.log(req.body);
    res.render("calculos",{
        "Estudiante": req.body.nombre,
        "nota1": parseInt(req.body.nota1),
        "nota2": parseInt(req.body.nota2),
        "nota3": parseInt(req.body.nota3)
    });
});

app.get("*", (req,res) =>{
    res.render("error",{
        "Estudiante":"No definido",
    })
});

app.listen(port,(err)=>{
    if (err) throw err;
    console.log("Express server se encuentra corriendo en el puerto: " + port)  
});
