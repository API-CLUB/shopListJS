import { getAllItemsFromAPI, postItemToAPI } from "./api.sercices.js";

// APICALL
//VAR   VARIABLES DOM
let items = [];
const item = {
  id: "",
  createdAt: "",
  nameProduct: "",
  isBought: false,
};
const shopListDOM = document.getElementById("listId");
const inputIdDOM = document.getElementById("inputId");
const addBtnId = document.getElementById("addBtnId");

//¿   FUNCTION TO PRINT ARRAY[ITEMS]
async function printList() {
  items = await getAllItemsFromAPI();
  shopListDOM.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    shopListDOM.innerHTML += `<li>
    <span><input type="checkbox" onchange="checkedItem('${i}')" ${
      items[i].isBought ? "checked" : ""
    } ></span>
    <span class='${items[i].isBought ? "textSpan" : ""}'>${
      items[i].nameProduct
    }</span>
    <span onclick="deleteItemFromList('${i}')" class="item-delete-btn" id='${
      items[i].id
    }'>x</span>
    </li>`;
  }
}

//!   FUNCTION TO ADD ITEM
async function addItemToList() {
  const newItem = inputIdDOM.value.trim();
  inputIdDOM.value = "";

  if (!newItem) {
    alert("añade algo !! ");
    return;
  }
  if (newItem.length > 150) {
    alert("el archivo es superior a 25 caracteres");
    return;
  }
  for (const item of items) {
    if (item.nameProduct.toLowerCase() == newItem.toLowerCase()) {
      alert("ya esta en la lista");
      return;
    }
  }
  let newItemObject = {
    nameProduct: textFormat(newItem),
    isBought: false,
  };
  await postItemToAPI(newItemObject);
  await printList();
}

//¡   FUNCTION TO DELETE
function deleteItemFromList(index) {
  items.splice(index, 1);
  printList();
}

//OKAY   FUNCION TO CHECKBOX
function checkedItem(index) {
  items[index].isBought = !items[index].isBought;
  printList();
}

//-   FUNCTION TO FORMAT TEXT
function textFormat(text) {
  const splitText = text.split(" ");
  const wordFormatText = [];
  splitText.forEach((word) =>
    wordFormatText.push(
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
  );
  return wordFormatText.join(" ");
}

//?   FUNCTION MAIN
async function main() {
  addBtnId.addEventListener("click", addItemToList);
  await printList();
}

await main();

window.addItemToList = addItemToList;
window.deleteItemFromList = deleteItemFromList;
window.checkedItem = checkedItem;
