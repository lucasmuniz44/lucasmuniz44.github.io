const USER = localStorage.getItem('userLog');
const CHANGES = document.getElementById('saveChanges');
checkLogInProfile();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
      
        form.classList.add('was-validated')
        

  
      }, false)
    })
})()

function showInfoProfile(){
  var Email = localStorage.getItem('userLog');
  var obj = localStorage.getItem(Email);
  if(obj != null){
    var data = JSON.parse(obj);
    document.getElementById('firstName').value = data.primerNombre;
    document.getElementById('secondName').value = data.segundoNombre;
    document.getElementById('firstLastName').value = data.primerApellido;
    document.getElementById('secondLastName').value = data.segundoApellido;
    document.getElementById('email').value = data.email;
    document.getElementById('contactPhone').value = data.telefono;
  }
}

function changeInfoProfile(){
  var data = {
    "primerNombre": document.getElementById('firstName').value,
    "segundoNombre": document.getElementById('secondName').value,
    "primerApellido": document.getElementById('firstLastName').value,
    "segundoApellido": document.getElementById('secondLastName').value,
    "email": localStorage.getItem('userLog'),
    "telefono": document.getElementById('contactPhone').value,
}
  localStorage.setItem(localStorage.getItem('userLog'), JSON.stringify(data));
}

window.onload = showInfoProfile;


function checkLogInProfile(){

  if(USER == null){
    document.getElementById('profile').classList.add('d-none');
    document.getElementById('logInAlert').classList.replace('d-none','d-block')
  }
}

  
  // MOSTRAR PERFIL // BOTON INICIO DE SESION
  sesionOn();
  function Usuario(){
    document.getElementById('Usuario').innerHTML = 
    
    ` <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    ${localStorage.getItem('userLog') || sessionStorage.getItem('userLog')}
  </a>
<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
<li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
<li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
<li><a class="dropdown-item" href="login.html" onclick="cerrarSesion()">Cerrar sesión</a></li>
</ul>`
    
    }
  function sesionOn(){
    if(localStorage.getItem('userLog') || sessionStorage.getItem('userLog'))
        Usuario();
    else{
        document.getElementById('userLog').innerHTML = 
        `<button type="button" class="button-15" id="indexBtn" role="button">Iniciar Sesion</button>`
        document.querySelector('#indexBtn').addEventListener('click', function(){
            window.location.href = './login.html';
        })
}}
function cerrarSesion(){
    localStorage.removeItem('userLog'), sessionStorage.removeItem('userLog');
    location.reload();
    };     

