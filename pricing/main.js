/* (async (p1) => {
    let peticion = await fetch(`${p1}.json`);
    let res = await peticion.json();
    console.log(res);
})("config") 
*/

/* MOSTRANDO LA INFORMACION EN JSON CON ASYNC Y AWAIT  */

const path = "config" //Declaramos el config del json

/* Funcion para pintar primera informacion */
let fnSectionOne = async() => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    
    let seleccion = document.querySelector("#myJsonSection");
    seleccion.insertAdjacentHTML("beforeend", /*html*/ ` 
    <P>${res.section.parrafoPrincipal}</P>
    <h3>${res.section.titulo} </h3>
    <div class="">
      ${res.section.divContenido.map((value)=>{
        return(/*html*/`
          <div>
              ${value.icon}
              <label for="">${value.texto}</label>
          </div>
          `)
        }).join("")
      }
    </div>
    `);  
}
fnSectionOne();

/* Funcion para crear las cards */
let fnCards = async() => {
  let peticion = await fetch(`${path}.json`);
  let res = await peticion.json();

  let card = document.querySelector("#card");
    card.insertAdjacentHTML("beforeend", /*html*/ `
    ${res.section.card.map((value)=> {
    return (/*html*/` 
      <article class="col">
          <div class="card mb-4 rounded-0 shadow-sm ${value.border}">
            <div class="card-header py-3 ${value.textDecorate} ${value.border}">
              <h4 class="my-0 fw-normal">${value.text}</h4>
            </div>
            <div class="card-body">
              <h3 class="card-title pricing-card-title">${value.precio}<small class="text-body-secondary fw-light">${value.interporal}</small></h3>
              <ul class="list-unstyled mt-3 mb-4">
                <li>${value.video} <span class="text-body-secondary fw-light">${value.estadoVid}</span></li>
                <li>${value.resolucion} <span class="text-body-secondary fw-light">${value.estadoRes} </span></li>
                <li>${value.multi} <span class="text-body-secondary fw-light">${value.estadoMulti}</span></li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">${value.button}</button>
            </div>
          </div>
      </article>
      `)
    }).join("")
  }`)
}
fnCards();

/* Funcion para crear Tables */
let fnTable = async() => {
  let peticion = await fetch(`${path}.json`);
  let res = await peticion.json();

  let table = document.querySelector("#table");
  table.insertAdjacentHTML("beforeend", /*html*/`
  <table class="table text-center">
    <thead>
      <tr>
        ${res.section.table.estiloInfo.map((value)=>{
          return(/*html*/` <th style="${value.estilo}">${value.info}</th>`)
        }).join("")
      }
      </tr>
    </thead>
    <tbody>
      ${res.section.table.datos.map((value)=>{
        return(/*html*/`
        <tr>
        <th scope="row" class="text-start">${value.infoDis}</th>
          <td>
              ${value.infoText}
          </td>
          <td>
            ${value.infoTextTwo}
          </td>
          <td>
            ${value.infoTextThree}
          </td>
        </tr>
        `)
      }).join("")
    }
    </tbody>
  </table>
  `)
}
fnTable();

/* Funcion terminos y condiciones */

let fnTerCond = async() => {
  let peticion = await fetch(`${path}.json`);
  let res = await peticion.json();

  let terminos = document.querySelector("#termCod");
  terminos.insertAdjacentHTML("beforeend", /* html */`
    <p  class="text-body-secondary fw-light"> 
    ${res.section.terminosCond.textTerm} <br> <br>
    ${res.section.terminosCond.textTermTwo}
    </p>
    <div class="d-flex align-items-center justify-content-center">
          <button type="button" class="w-50 btn btn-lg btn-primary">Next</button>
    </div>
  `)
}

fnTerCond()
