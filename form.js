function submitForm() {
    // Obtener los valores del formulario
    var name = document.getElementById("name").value;
    var lm = document.getElementById("lm").value;
    var cel = document.getElementById("cel").value;
    var gm = document.getElementById("gm").value;
    var ms = document.getElementById("ms").value;
  
    // Crear un objeto con la información del formulario
    var formData = {
      name: name,
      lm: lm,
      cel: cel,
      gm: gm,
      ms: ms
    };
  
    // Mostrar los datos en la consola (puedes enviarlos a un servidor aquí)
    console.log(formData);
  }
  