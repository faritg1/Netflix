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
    /* PARTE 1 */
    let seleccion = document.querySelector("#myJsonSection");
    seleccion.insertAdjacentHTML("beforeend", /*html*/ ` 
    <P>${res.section.parrafoPrincipal}</P>
    <h3>${res.section.titulo} </h3>
    <div class="">
      ${ res.section.divContenido.map((value)=> {
        return(`
        <div>
          <svg class="me-2" width="26" height="26" fill="red">
            ${value.icon}
          </svg>  
          <label for="">${value.texto}</label>
        </div>
        `)
      }).join("")
    }
    </div>
    `); 

    /* PARTE 2 */
    let card = document.querySelector("#card");
    card.insertAdjacentHTML("beforeend", /*html*/ `

    ${res.section.card.map((value)=> { /*html */
    return(` 
      <div class="col">
          <div class="card mb-4 rounded-0 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${value.text}</h4>
            </div>
            <div class="card-body">
              <h3 class="card-title pricing-card-title">${value.precio}<small class="text-body-secondary fw-light">${value.interporal}</small></h3>
              <ul class="list-unstyled mt-3 mb-4">
                <li>${value.video}<span class="text-body-secondary fw-light">${value.estadoVid}</span></li>
                <li>${value.resolucion} <span class="text-body-secondary fw-light">${value.estadoRes} </span></li>
                <li>${value.multi}<span class="text-body-secondary fw-light">${value.estadoMulti}</span></li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">${value.button}</button>
            </div>
          </div>
        </div>
      `)
    }).join("")
  }
  `) 
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