const refs = {
  formEl: document.querySelector(".login-form"),
  emailInput: document.querySelector('[name="email"]'),
  passwordInput: document.querySelector('[name="password"]'),
  submitBtn: document.querySelector('button[type="submit"]'),
};

refs.formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    alert("Please fill in both email and password fields.");
    return;
  }

  const formDataObject = {
    email,
    password,
  };

  console.log(formDataObject);
  refs.formEl.reset();
});
