const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the create page
      document.location.replace("/api/create");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log(email, password);

  if (email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/create");
    } else {
      alert(response.statusText);
    }
  }
};

if (document.querySelector(".login-form")) {
  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
};

if (document.querySelector(".signup-form")) {
  document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
};

