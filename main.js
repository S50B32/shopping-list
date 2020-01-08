// selecting DOM elements
const items = document.getElementById("items");
const deleteButtons = document.querySelectorAll(".btn-danger");
const itemForm = document.getElementById("item");
const submitButton = document.querySelector("input[type='submit']");
const filterBox = document.getElementById("filter");



// listening for the addition of new items  (submit input)
submitButton.addEventListener("click", addItem);

function addItem(e) {

    // preventing default submit button onclick action
    e.preventDefault();

    // checking if item input is empty
    if (itemForm.value != ""){
        //creating new li
        var newItem = document.createElement("li");
        newItem.className = "list-group-item";
        newItem.innerText = itemForm.value;
        // creating new delete button
        const newDeleteButton = document.createElement("button");
        newDeleteButton.className = "btn btn-danger btn-sm float-right delete";
        newDeleteButton.innerText = "X";
        // appending new li
        items.appendChild(newItem);
        // appending new delete button to previously created li
        newItem.appendChild(newDeleteButton);
        // resetting item input box after adding new item
        itemForm.value = "";

    }else{
        alert("Wprowadź nazwę artykułu");
    };

    
  
};

//listening for delete button click
items.addEventListener("click", deleteItem);

function deleteItem(e) {

    //checking if the click target is a delete button
    if (e.target.className = "btn btn-danger btn-sm float-right delete") {
        items.removeChild(e.target.parentElement);
    };
    
};

// listening for text changes in the filter input field
filterBox.addEventListener("keyup", filterItems);

// function filters the item list every time an input field value changes
function filterItems (e) {

    const itemList = items.children;

    // 
    for (i of itemList) {;
        // pulling out the text from individual items 
        let itemValue= i.textContent.toLowerCase().substring(0, i.textContent.length - 2);
        // pulling out the text from filter input field 
        let filterBoxValue = e.target.value.toLowerCase();
        
        // comparing the filter input value to every single list item text content
        if (itemValue.search(filterBoxValue) === -1) {
            //no characters  = no display
            i.style.display = "none";
        }else{
            //matching character = display
            i.style.display = "block";
        };
    };


};