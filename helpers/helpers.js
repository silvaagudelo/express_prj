const hbs = require("hbs");

hbs.registerHelper("obtenerPromedio", (nota1,nota2,nota3)=>{
    return (nota1+nota2+nota3)/3;
})

hbs.registerHelper("listar",()=>{
    const listado= require("./listado.json");
    let tt="";
    listado.forEach(item => {
        tt+=`<tr><td>${item.nombre}</td><td>${item.Matematicas}</td><td>${item.Ingles}</td><td>${item.Español}</td></tr>`
        console.log
    });
    let t=`<table><tr><th>Nombre</th><th>Nota Matematicas</th><th>Nota Ingles</th><th>Nota Español</th></tr>${tt}</table>`;
    return t;
})