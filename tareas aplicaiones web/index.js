var root = document.getElementById("root");
var message = document.createElement("h1");



document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});

function enviarForm() {
  return (root.innerHTML = `
    <div>
      <div class="result-container">
        <h3>Nombre:</h3>
        ${document.getElementById("name").value}
      </div>
      <div c lass="result-container">
        <h3>Direccion:</h3>
        ${document.getElementById("address").value}
      </div>
      <div class="result-container">
        <h3>Fecha Nacimiento:</h3>
        ${document.getElementById("date").value}
      </div>
      <div class="result-container">
        <h3>Email:</h3>
        ${document.getElementById("email").value}
      </div>
      <div class="result-container">
        <h3>Contraseña:</h3>
        ${document.getElementById("password").value}
      </div>
      <div class="result-container">
        <h3>Confirmacion de contraseña:</h3>
        ${document.getElementById("repeatPassword").value}
    </div>
    </div>

  `);
}
