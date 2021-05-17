
const form = document.querySelector('#formValidaRut');

const txtRut = document.querySelector('#txt-rut');

const resultado = document.querySelector('#resultado');


form.addEventListener('submit', ( e ) => {

    e.preventDefault();

    let rutValidador = new RutValidador( txtRut.value );

   
    if( rutValidador.esValido ){
        // resultado.innerHTML = 'el rut: ' + rutValidador.rut +'-' + rutValidador.dv + ' es válido';
        resultado.innerHTML = 'el rut: ' + rutValidador.formato() + ' es válido';
    }else{
        resultado.innerHTML = `El rut '${ txtRut.value }' <strong>no</strong> es válido`;
    }

});