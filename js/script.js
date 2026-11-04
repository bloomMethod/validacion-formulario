// const inputs = document.querySelectorAll(".input");

// const password = document.querySelector('[name="password"]');
// const confirmarPassword = document.querySelector('[name="confirmarPassword"]');

// const fieldConfirmar = confirmarPassword.closest(".field");
// const errorConfirmar = document.createElement("p");

// errorConfirmar.classList.add("error");

// let confirmarFueValidado = false;

// // Recorrer todos los inputs
// inputs.forEach(function (input) {
//   const inputWrap = input.parentElement;
//   const field = input.closest(".field");
//   const error = document.createElement("p");

//   error.classList.add("error");

//   // Cuando entramos al input
//   input.addEventListener("focus", function () {
//     // Confirmar contraseña
//     if (input.name === "confirmarPassword") {
//       if (confirmarFueValidado && fieldConfirmar.contains(errorConfirmar)) {
//         inputWrap.classList.add("blur");
//         inputWrap.classList.remove("focus");
//       } else {
//         inputWrap.classList.add("focus");
//         inputWrap.classList.remove("blur");
//       }

//       return;
//     }

//     // Los demás campos
//     if (field.querySelector(".error")) {
//       inputWrap.classList.add("blur");
//       inputWrap.classList.remove("focus");
//     } else {
//       inputWrap.classList.add("focus");
//       inputWrap.classList.remove("blur");
//     }

//     inputWrap.classList.remove("escribiendo");
//   });

//   // Cuando salimos del input
//   input.addEventListener("blur", function () {
//     inputWrap.classList.remove("escribiendo");
//     inputWrap.classList.remove("focus");

//     // Confirmar contraseña
//     if (input.name === "confirmarPassword") {
//       confirmarFueValidado = true;
//       validarConfirmacion();
//       return;
//     }

//     // Campo vacío
//     if (input.value.trim() === "") {
//       if (input.name === "name") {
//         error.innerText = "Debes insertar un nombre";
//       } else if (input.name === "email") {
//         error.innerText = "Debes insertar un correo";
//       } else if (input.name === "password") {
//         error.innerText = "Debes insertar una contraseña";
//       }

//       field.appendChild(error);
//       inputWrap.classList.add("blur");

//       // Validar correo
//     } else if (
//       input.name === "email" &&
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
//     ) {
//       error.innerText = "Debes agregar un correo válido";
//       field.appendChild(error);
//       inputWrap.classList.add("blur");

//       // Validar contraseña
//     } else if (input.name === "password" && input.value.length < 6) {
//       error.innerText = "Utiliza al menos 6 caracteres";
//       field.appendChild(error);
//       inputWrap.classList.add("blur");

//       // Campo correcto
//     } else {
//       error.remove();
//       inputWrap.classList.remove("blur");
//       inputWrap.classList.add("focus");
//     }
//   });

//   // Cuando escribimos
//   input.addEventListener("input", function () {
//     // Confirmar contraseña
//     if (input.name === "confirmarPassword") {
//       if (confirmarFueValidado) {
//         validarConfirmacion();
//       } else {
//         inputWrap.classList.add("escribiendo");
//         inputWrap.classList.remove("blur");
//       }

//       return;
//     }

//     // Nombre
//     if (input.name === "name") {
//       if (input.value.trim() === "") {
//         inputWrap.classList.add("blur");
//         inputWrap.classList.remove("escribiendo");
//       } else {
//         error.remove();
//         inputWrap.classList.remove("blur");
//         inputWrap.classList.add("escribiendo");
//       }
//     }

//     // Correo
//     if (input.name === "email") {
//       if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
//         inputWrap.classList.add("blur");
//         inputWrap.classList.remove("escribiendo");
//       } else {
//         error.remove();
//         inputWrap.classList.remove("blur");
//         inputWrap.classList.add("escribiendo");
//       }
//     }

//     // Contraseña
//     if (input.name === "password") {
//       if (input.value.length < 6) {
//         inputWrap.classList.add("blur");
//         inputWrap.classList.remove("escribiendo");
//       } else {
//         error.remove();
//         inputWrap.classList.remove("blur");
//         inputWrap.classList.add("escribiendo");
//       }
//     }
//   });
// });

// // Validar confirmar contraseña
// function validarConfirmacion() {
//   const inputWrap = confirmarPassword.parentElement;

//   // Si está vacío
//   if (confirmarPassword.value.trim() === "") {
//     errorConfirmar.innerText = "Debes confirmar tu contraseña";

//     if (!fieldConfirmar.contains(errorConfirmar)) {
//       fieldConfirmar.appendChild(errorConfirmar);
//     }

//     inputWrap.classList.add("blur");
//     inputWrap.classList.remove("focus");
//     inputWrap.classList.remove("escribiendo");

//     return;
//   }

//   // Si las contraseñas no coinciden
//   if (confirmarPassword.value !== password.value) {
//     errorConfirmar.innerText = "Las contraseñas no coinciden";

//     if (!fieldConfirmar.contains(errorConfirmar)) {
//       fieldConfirmar.appendChild(errorConfirmar);
//     }

//     inputWrap.classList.add("blur");
//     inputWrap.classList.remove("focus");
//     inputWrap.classList.remove("escribiendo");
//   } else {
//     // Si las contraseñas coinciden
//     errorConfirmar.remove();

//     inputWrap.classList.remove("blur");
//     inputWrap.classList.remove("escribiendo");
//     inputWrap.classList.add("focus");
//   }
// }

/*----------- */

const form = document.querySelector("#form");
const inputs = document.querySelectorAll(".input");

const password = document.querySelector('[name="password"]');
const confirmarPassword = document.querySelector('[name="confirmarPassword"]');


const nombre = document.querySelector('[name="name"]')
let user = {
  name: "",
};

// Guardamos si cada campo ya fue validado
const camposValidados = {};

// Creamos un mensaje de error para cada campo
const errores = {};

inputs.forEach(function (input) {
  camposValidados[input.name] = false;

  errores[input.name] = document.createElement("p");
  errores[input.name].classList.add("error");
});

// Obtener el error de cada campo
function obtenerError(input) {
  const valor = input.value.trim();

  if (input.name === "name") {
    if (valor === "") {
      return "Debes insertar un nombre";
    }
  }

  if (input.name === "email") {
    if (valor === "") {
      return "Debes insertar un correo";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
      return "Debes agregar un correo válido";
    }
  }

  if (input.name === "password") {
    if (valor === "") {
      return "Debes insertar una contraseña";
    }

    if (valor.length < 6) {
      return "Utiliza al menos 6 caracteres";
    }
  }

  if (input.name === "confirmarPassword") {
    if (valor === "") {
      return "Debes confirmar tu contraseña";
    }

    if (input.value !== password.value) {
      return "Las contraseñas no coinciden";
    }
  }

  return "";
}

// Validar un campo individual
function validarCampo(input) {
  const inputWrap = input.parentElement;
  const field = input.closest(".field");
  const error = errores[input.name];

  const mensaje = obtenerError(input);

  if (mensaje !== "") {
    error.innerText = mensaje;

    if (!field.contains(error)) {
      field.appendChild(error);
    }

    inputWrap.classList.add("blur");
    inputWrap.classList.remove("focus");
    inputWrap.classList.remove("escribiendo");

    return false;
  }

  error.remove();

  inputWrap.classList.remove("blur");
  inputWrap.classList.remove("escribiendo");
  inputWrap.classList.add("focus");

  return true;
}

// Eventos de los inputs
inputs.forEach(function (input) {
  const inputWrap = input.parentElement;

  // Cuando entramos al campo
  input.addEventListener("focus", function () {
    if (camposValidados[input.name]) {
      validarCampo(input);
    } else {
      inputWrap.classList.add("focus");
      inputWrap.classList.remove("blur");
      inputWrap.classList.remove("escribiendo");
    }
  });

  // Cuando salimos del campo
  input.addEventListener("blur", function () {
    camposValidados[input.name] = true;
    validarCampo(input);
  });

  // Cuando escribimos
  input.addEventListener("input", function () {
    if (camposValidados[input.name]) {
      validarCampo(input);
    } else {
      inputWrap.classList.add("escribiendo");
      inputWrap.classList.remove("blur");
    }
  });
});

// Validar el formulario completo
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let formularioValido = true;

  inputs.forEach(function (input) {
    camposValidados[input.name] = true;

    const campoValido = validarCampo(input);

    if (!campoValido) {
      formularioValido = false;
    }
  });

  // Si todos los campos son válidos
  if (formularioValido) {
    // Guardar el nombre en el objeto user
    user.name = nombre.value.trim();

    // Guardar el objeto en localStorage
    localStorage.setItem("user", JSON.stringify(user));
    form.innerHTML = `
      <div class="success-message">
        <h2>¡Formulario enviado!</h2>
        <p>Tus datos se han validado correctamente.</p>
      </div>
    `;
  } else {
    console.log("El formulario contiene errores");
  }
});

function chargeForm() {
  const name = document.getElementById("user-name");
  const data = localStorage.getItem("user");

  if (data) {
    user = JSON.parse(data);
    name.innerText = " " + user.name;
  }
};
chargeForm();
