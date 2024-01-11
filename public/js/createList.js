
console.log("connected to stored");
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#list_name").value.trim();
  let items = JSON.parse(localStorage.getItem("items")) || [];
  
  items = items.map((item) => item.individual);
    console.log(name, items);

    window.onload = function () {
      loadItems();
    };
    
   

  if (name && items) {
    const response = await fetch(`/api/stored`, {
      method: "POST",
      body: JSON.stringify({ name, items }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
        console.log(response);
      document.location.replace("/api/stored");
      localStorage.clear();
      let itemsContainer = document.getElementById("items-container");
      itemsContainer.replaceChildren();

    } else {
      alert("Failed to create list");
    }
  }
};

 // function for adding itemss to create page
 function addItem() {
  console.log("enter addItem function");
  let individual = document.getElementById("textarea1").value;
  console.log(individual);
  if (individual) {
    // Create a item object
    var item = {
      individual: individual
    };

    // Get existing items from local storage
    const items = JSON.parse(localStorage.getItem("items")) || [];

    // Add the new item to the array
    items.push(item);
    console.log(items, "outside loaditems");
    console.log(item);
    // Save the updated items back to local storage
    localStorage.setItem("items", JSON.stringify(items));


    document.getElementById("item-form").reset();

   
    loadItems();
  }
}


function loadItems() {
  let itemsContainer = document.getElementById("items-container");
  let items = JSON.parse(localStorage.getItem("items")) || [];
  console.log(items, "inside loaditems");
 
  itemsContainer.innerHTML = "";


  items.forEach(function (item) {
    let div = document.createElement("div");
    div.className = "item";
    div.innerHTML = item.individual;
    itemsContainer.appendChild(div);
  });
}





if (document.querySelector("#add-list")) {
    document
    .querySelector("#add-list")
    .addEventListener("click", newFormHandler);
};

