document.addEventListener("DOMContentLoaded", () => {

    const alertaDenegado = document.getElementById("alerta");
    const btnDenegado = document.getElementById("btnDenegado");

    function accesoDenegado(){
        alertaDenegado.classList.remove("hidden");
    }

    function validarPassword(password){
        return (password.length >= 6);
    }

    function validarEmail(email){
        return (email != "");
    }

    function login(password, email){
        if ((validarPassword(password)) && (validarEmail(email))){
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            location.href = "index.html";
        } else {
            accesoDenegado();
        }
    }

    const btnEnviar = document.getElementById("btnEnviar");

    btnEnviar.addEventListener("click", () => {
        let password = document.getElementById("password").value;
        let email = document.getElementById("email").value;
        login(password, email);
    });

    btnDenegado.addEventListener("click", () => {
        alertaDenegado.classList.add("hidden");
        let password = document.getElementById("password");
        let email = document.getElementById("email");
        password.value= "";
        email.value = "";
    })
})