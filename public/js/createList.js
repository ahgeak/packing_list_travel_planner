
console.log("connected to stored");
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#list_name").value.trim();
  const items = document
    .querySelector("#input_items")
    .value.trim();

    console.log(name, items);

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
    } else {
      alert("Failed to create list");
    }
  }
};

if (document.querySelector(".new-list-form")) {
    document
    .querySelector(".new-list-form")
    .addEventListener("submit", newFormHandler);
};

