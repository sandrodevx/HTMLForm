window.onload = function () {
  const errorMsg = document.getElementById("error-msg");
  const successMsg = document.getElementById("success-msg");
  const form = document.getElementById("payment-form");
  const inputs = document.querySelectorAll("input, select, textarea");

  // Máscara para el número de tarjeta
  $("#card-number").inputmask("9999 9999 9999 9999");

  // Validación en tiempo real
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (input.value.trim()) {
        input.classList.remove("input-error");
        input.classList.add("input-valid");
      } else {
        input.classList.remove("input-valid");
      }
    });
  });

  // Validación del formulario
  form.addEventListener("submit", function (e) {
    let isValid = true;
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add("input-error");
      } else {
        input.classList.remove("input-error");
      }
    });

    if (!isValid) {
      e.preventDefault();
      errorMsg.style.display = "block";
      successMsg.style.display = "none";
      document.querySelector(".input-error").focus();
    } else {
      e.preventDefault();
      errorMsg.style.display = "none";
      successMsg.style.display = "block";
      form.reset();
      setTimeout(() => {
        successMsg.style.display = "none";
      }, 3000);
    }
  });
};
