
$(document).ready(function(){    
    $('#btnGuardar').click(function(){         
        var nom = document.getElementById("Jname").value;
        //guardado de datos
        localStorage.setItem("Nombre", nom);
         //limpiando de input
        document.getElementById("Jname").value = "";
		alert("Está jugando "+nom);
    });   
});