function limpiar() {
    document.getElementById('formulario').reset();
}

function invertir(){
    var cadena = document.getElementById('frase').value;

    let message = cadena.split(' ');
    let reversedmessage = message.reverse();
    let finalreverse = reversedmessage.join(' ');

  //  alert (finalreverse);

    document.getElementById('el-resultado').innerHTML = finalreverse;
}