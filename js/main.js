
// Inicio 

alert("¡Buenas, Bienvenido!");

let nombreDeUsuario = validarNombre();
console.log("Su Usuario es: " + nombreDeUsuario);

let email = validarEmail();
console.log("Su email es: " + email);

function validarNombre() {
    let nombre;
    do { nombre = prompt("Ingrese Usuario:");

        if (nombre === "" || !isNaN(nombre)) {
            alert("¡Error! Ingrese un nombre válido, no un número.");
        }
    } while (nombre === "" || !isNaN(nombre));
    return nombre;
}


function validarEmail() {
    let email;
    do { email = prompt("Ingrese su email:");
        
        if (email === "" || !email.includes("@") || !email.includes(".")) {
            alert("¡Error! Ingrese un email válido, que tenga '@' y un '.' ");
        }
    } while (email === "" || !email.includes("@") || !email.includes("."));
    alert("Enhorabuena, Ud quedó registrado.");
    return email;
}