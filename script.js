// La lista debe cargarse automáticamente cuando la aplicación se inicia.
// Cada ítem debe mostrarse en su propio elemento <li>, con un botón de eliminar "x" a la derecha.
// Si la lista está vacía, no se debe mostrar ningún ítem, pero el contenedor de la lista debe permanecer visible.
// Los ítems deben aparecer en el orden en el que fueron añadidos.

// Esta lista es la que de debe mostrar en el navegador
let items = [];
const shopListDOM = document.getElementById('listId')
const inputIdDOM = document.getElementById("inputId")
const addBtnId = document.getElementById("addBtnId")





// Función para pintar la lista en el navegador
function printList() {
  shopListDOM.innerHTML = "";
  for (let i = 0; i < items.length; i++){ 
    shopListDOM.innerHTML += `<li>${items[i]}<span onclick="" class="item-delete-btn">x</span></li>`
  }
}

// Función para eliminar un item de la lista
function deleteItemFromList(item) {}

// Función para agregar un item a la lista
function addItemToList() {
  const newItem = inputIdDOM.value.trim();
  inputIdDOM.value = "";

  if(!newItem){
    alert("añade algo !! ");
    return;
  }
  for (const item of items) {
    if(item.toLowerCase() == newItem.toLowerCase()){
     alert("ya esta en la lista");
     return;
   }
 }
 const itemToArray = newItem.split(" ");
 const capitalizeWords = []; 
 
 
 const capitaize = newItem.charAt(0).toUpperCase() + newItem.slice(1).toLowerCase();
  items.push(capitaize);
  printList();
}


// Función principal - Aquí empieza la aplicación
function main() {
  // alert("Welcome to the list app! Start deleting this alert, please.");
  addBtnId.addEventListener("click", addItemToList);
  printList();

}

// Llamada a la función principal
main();
