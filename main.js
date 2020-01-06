const items = document.getElementById("items");
const deleteButtons = document.querySelectorAll(".btn-danger");
const itemForm = document.getElementById("item");
const submitButton = document.querySelector("input[type='submit']");
const filterBox = document.getElementById("filter");

items.addEventListener("click", deleteItem);

function deleteItem(e) {

    //check if click target is a delete button
    if (e.target.className = "btn btn-danger btn-sm float-right delete") {
        items.removeChild(e.target.parentElement);
    };
    
};

submitButton.addEventListener("click", addItem);

function addItem(e) {

    // prevent default "submit" action
    e.preventDefault();

    // create li
    const newItem = document.createElement("li");
    newItem.className = "list-group-item";
    newItem.innerText = itemForm.value;

    // create delete button
    const newDeleteButton = document.createElement("button");
    newDeleteButton.className = "btn btn-danger btn-sm float-right delete";
    newDeleteButton.innerText = "X";

    // append new li
    items.appendChild(newItem);
    
    // append delete button to new li
    newItem.appendChild(newDeleteButton);
  
}

filterBox.addEventListener("keyup", filterItems);

function filterItems (e) {

    const itemList = items.children;
    //console.log(itemList);
    //console.log(e.target.value)

    for (i of itemList) {;

        let itemValue= i.textContent.toLowerCase().substring(0, i.textContent.length - 2);
        let filterBoxValue = e.target.value.toLowerCase();

        console.log(itemValue, filterBoxValue);

        if (itemValue.search(filterBoxValue) === -1) {
            i.style.display = "none";
        }else{
            i.style.display = "block";
        }
    }


}