/* console.log("Hola 1");

setTimeout(() =>{
    console.log("Hola 2");
}, 1000);

console.log("Hola 3"); */

/* MOSTRANDO LA INFORMACION EN JSON CON ASYNC Y AWAIT  */

const path = "config"

let obtener = async() => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#myJsonSection");
    seleccion.insertAdjacentHTML("beforeend", /*html*/ ` 
    <P>${res.section.parrafoPrincipal}</P>
    <h3>${res.section.titulo} </h3>
    <div class="d-flex flex-column">
      ${ res.section.divContenido.map((value)=> {
        return (`
        <svg class="me-2" width="26" height="26" fill="red">
          ${value.icon}
        </svg> ${value.texto}
        `)
      } )

      }
    </div>
    `); 
}
obtener();

/* (async (p1) => {
    let peticion = await fetch(`${p1}.json`);
    let res = await peticion.json();
    console.log(res);
})("config") 
<svg class="me-2" width="26" height="26" fill="red">
  <use xlink:href="#check"/>
</svg>
  <label for="">Watch all you want. Ad-free.</label>

*/