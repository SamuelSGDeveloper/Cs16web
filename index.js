let serverButton = document.getElementById("svButton");
let homeButton = document.getElementById("homeButton");
let postContainer = document.getElementById("postContainer");
let colorButton = document.getElementById("colorButton");


//simulando un JSON que provenga del servidor
let cards = {
  1: {
    title: "Finaly ended!! THE PAGE IS DONE",
    postImage: "imagen.jpg",
    description:
      "me tarde un poco en hacerla, pero al final quedó nice. El texto se adapta a los contenedores, es responsive y fue creada mobil first",
  },

  2: {
    title: "Aún faltan detalles",
    postImage:
      "https://1.bp.blogspot.com/-bUWP_6OIs9c/Xw4Ri3HYd6I/AAAAAAAAB10/Z0nNbWzEejYekv1WpkCe46esiRNSr-UagCLcBGAsYHQ/s1920/CSGO.jpg",
    description:
      "Puede generar distintos post dinamicamente, claro, si no quiero sobresaturar la pagina deberia de tener un limite, aparte por ahora obtiene los datos de forma manual, pero si logro aprender api rest quedará mucho mejor y mas automatizada",
  },

  3:{
      title: "Avanzo a un siguiente proyecto",
      postImage:"https://rspm.online/gif/happy/happy_1.gif",
      description: "más y más complejo, seguiré avanzando :D"
  }
};

let servers = {
  1: {
    title: "aaaaaaa",
    ip: "12.21.2.21.2",
  },
  2: {
    title: "aaaaworksaaa",
    ip: "12.21.2.21.2",
  },
};
//---------------------------------------------

//crea el contenido que va a contener cada tarjeta del PostContainer
const createCardContent = (card) => {
  return `
    <div class="card">
    <h1 class="grid-item-1">${card.title}</h1>
    <h2 class="grid-item-2"><img src=${card.postImage} alt="" class="img"></h2>
    <h3 class="grid-item-3">${card.description}</h3>
    </div>
    `;
};
//genera una tarjeta nueva en el postContainer
const createCard = (card) => {
  postContainer.innerHTML += createCardContent(card);
};

//carga el contenido de servers
const createServerContent = (card) => {
  return `
    <div class="card isSv">
    <h1 class="grid-item-1">${card.title}</h1>
    <h3 class="grid-item-3">${card.ip}</h3>
    </div>
    `;
};

const createSvCard = (card) => {
  postContainer.innerHTML += createServerContent(card);
};

//-----------------------------
//BOTONES
//------------------------------

for (let card in cards) {
  createCard(cards[card]);
}

homeButton.onclick = () => {
  postContainer.innerHTML = "";
  //crea una tarjeta por cada objeto recibido en el JSON; DEFAULT
  for (let card in cards) {
    createCard(cards[card]);
  }
};

serverButton.onclick = () => {
  postContainer.innerHTML = "";
  //crea una tarjeta por cada objeto recibido en el JSON; DEFAULT
  for (let servidor in servers) {
    createSvCard(servers[servidor]);
  }
};

// serverButton.onmouseover = () =>{
//     serverButton.classList.add("rainbow");
// }

colorButton.onclick = () =>{

}

//-----------------------------------
// let new_card = document.createElement('div')
// new_card.innerHTML = "<h1>jola</h1>"
