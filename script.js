//VAR   VARIABLES DOM
let items = [];
const shopListDOM = document.getElementById("listId");
const inputIdDOM = document.getElementById("inputId");
const addBtnId = document.getElementById("addBtnId");

//

main();

//¿   FUNCTION TO PRINT ARRAY[ITEMS]
function printList() {
  shopListDOM.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    shopListDOM.innerHTML += `<li>
    <span><input type="checkbox" onchange="checkedItem('${i}')" ${
      items[i].isBought ? "checked" : ""
    } ></span>
    <span class='${items[i].isBought ? "textSpan" : ""}'>${
      items[i].nameProduct
    }</span>
    <span onclick="deleteItemFromList('${i}')" class="item-delete-btn">x</span>
    </li>`;
  }
}

//!   FUNCTION TO ADD ITEM
function addItemToList() {
  const newItem = inputIdDOM.value.trim();
  inputIdDOM.value = "";

  if (!newItem) {
    alert("añade algo !! ");
    return;
  }
  if (newItem.length > 25) {
    alert("el archivo es superior a 25 caracteres");
    return;
  }
  for (const item of items) {
    if (item.nameProduct.toLowerCase() == newItem.toLowerCase()) {
      alert("ya esta en la lista");
      return;
    }
  }

  items.push({
    nameProduct: textFormat(newItem),
    isBought: false,
  });
  printList();
}

//¡   FUNCTION TO DELETE
function deleteItemFromList(index) {
  items.splice(index, 1);
  //! comprobar funcion printList();
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
function main() {
  // alert("Welcome to the list app! Start deleting this alert, please.");
  addBtnId.addEventListener("click", addItemToList);
  printList();
  test();
}

//TEST   FUNCTION TO TEST FORMAT + MAX CHARACTERS
function test() {
  const formatOK = "Aa Aa Aa Aa Aa Aa Aa Aa";
  let check = "";
  for (let i = 0; i < 9; i++) {
    const inpuTest = document.getElementById("inputId");
    check += " aa";
    inpuTest.value = check;
    addItemToList();
  }
  const result = items[items.length - 1];
  return console.log(
    `Error +25 caracteres y comprobacion del formato: ${
      result.nameProduct == formatOK
    }`
  );
}
