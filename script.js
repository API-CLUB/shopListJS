// La lista debe cargarse automáticamente cuando la aplicación se inicia.
// Cada ítem debe mostrarse en su propio elemento <li>, con un botón de eliminar "x" a la derecha.
// Si la lista está vacía, no se debe mostrar ningún ítem, pero el contenedor de la lista debe permanecer visible.
// Los ítems deben aparecer en el orden en el que fueron añadidos.

// Esta lista es la que de debe mostrar en el navegador
let items = ["Orange", "Apple", "Banana"];
const shopListDOM = document.getElementById('listId')
// Función para pintar la lista en el navegador
function printList() {
  console.log (shopListDOM)
}

// Función para eliminar un item de la lista
function deleteItemFromList(item) {}

// Función para agregar un item a la lista
function addItemToList() {}

// Función principal - Aquí empieza la aplicación
function main() {
  alert("Welcome to the list app! Start deleting this alert, please.");
  printList();
}

// Llamada a la función principal
main();
