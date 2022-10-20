Pizzas = [
    {
        id: 1,
        nombre: "Doble Muzza",
        ingredientes: ["salsa de tomate", "Doble queso", "aceitunas verdes", "morrones"],
        precio: 1000,
    },
    {
        id: 2,
        nombre: "Panceta y Puerro",
        ingredientes: ["salsa de tomate", "queso", "panceta", "puerro"],
        precio: 1300,
    },
    {
        id: 3,
        nombre: "Clasica",
        ingredientes: ["salsa de tomate", "queso", "jamón", "aceitunas"],
        precio: 300,
    },
    {
        id: 4,
        nombre: "Champi",
        ingredientes: ["queso", "champiñones", "salsa blanca"],
        precio: 1000,
    },
    {
        id: 5,
        nombre: "Tomatada",
        ingredientes: ["salsa de tomate"],
        precio: 500,
    },
    {
        id: 6,
        nombre: "Rucula",
        ingredientes: ["salsa de tomate", "muzzarela", "hebras de queso parmesano", "rúcula"],
        precio: 1000,
    },
    {
        id: 7,
        nombre: "Anchoas",
        ingredientes: ["queso", "anchoras", "aceitunas negras"],
        precio: 1300,
    },
    {
        id: 8,
        nombre: "Napolitana",
        ingredientes: ["queso", "tomates", "albahaca"],
        precio: 1000,
    },
    {
        id: 9,
        nombre: "Provensal",
        ingredientes: ["queso", "ajo", "perejil fresco", "aceitunas verdes"],
        precio: 1200,
    }
]

const formu = document.getElementById("formulario");
const selectorPizzas = document.getElementById("selectorPizza");
const agregarBtn = document.getElementById("idButton");
const agregarListado = document.getElementById("mostarSeleccion");


const  getPizza= ()=>{
    pizzaListado = JSON.parse(localStorage.getItem("pizzas")) || []; 
    return pizzaListado;
}

const guardarPizzasLocal = (pizzaList) => {
    localStorage.setItem("pizzas", JSON.stringify(pizzaListado));
}

const createPizzaCard = (pizza, classType) => {
    return `
        <div class="card ${classType}">
            <h2 class="pizza-title">${pizza.nombre}</h2>
            <h3 class="pizza-price">$ ${pizza.precio}</h3>
        </div>
    `;
}

const  renderPizzas =(pizzaListado)=>{
    agregarListado.innerHTML = pizzaListado.map(ListadoDePizzas => createPizzaCard(ListadoDePizzas, ListadoDePizzas.id==undefined)).join("") 
}


const  buscarPizzas=(e)=>{
    e.preventDefault();
    const id = selectorPizzas.value;
    if (!id) {pizzaListado = [...pizzaListado, {id: undefined, nombre: "No ha ingresado ningun ID de pizza", precio: undefined}]}else{
        const nuevaPizza =  Pizzas.find( ListadoDePizzas => ListadoDePizzas.id == id); 
        if (nuevaPizza == undefined){
            pizzaListado = [...pizzaListado, {id: undefined, nombre: "El numero ingresado no coincide con ningun ID de Pizza.", precio: undefined}]
        }else{
            pizzaListado = [...pizzaListado, {id: nuevaPizza.id, nombre: nuevaPizza.nombre, precio : nuevaPizza.precio}];
        }
    }
    guardarPizzasLocal(pizzaListado);
    renderPizzas(pizzaListado);
    selectorPizzas.value = ""
};

const iniciar = () => {
    const pizzaList = getPizza();
    renderPizzas(pizzaList);
    formu.addEventListener("submit", buscarPizzas)
};
iniciar();
