"use strict";

class RutValidador {


    constructor( rut ){

        // esto es lo mismo que poner una propiedad de la clase llamada rut e igualarla aquí.
        this.rut = rut;

     
        // substring(A,B): si se omite el índice B, substring extrae 
        // caracteres hasta el final de la cadena.
        // ej:  const saludo = "hola"  
        //  saludo.substring(saludo.length -1 ) == "a"
    

        // obtenemos el último caracter del rut ( osea, el digito verificador )
        this.dv = this.rut.substring( this.rut.length - 1 );
        // // limpiar el rut dejando solamente dejando los números usando una expresión regular: /\D/g
        //   que busca todo lo que no sea número (puntos,guión,etc) y con el método replace se reemplazarán por un ''
        this.rut = this.rut.substring(0, this.rut.length -1  ).replace(/\D/g, '');
        this.esValido = this.validaRut();
    }

    validaRut(){

        let arrNumeros = Array.from( this.rut ).reverse();

        // sumando valores
        let acumulador = 0;
        let multiplicador = 2;
        
        for ( const numero of arrNumeros ) {
            acumulador += parseInt(numero) * multiplicador;
            multiplicador ++;

            if( multiplicador == 8 ){
                multiplicador = 2;
            }
            
        }

        // no es el mismo dv que la variable de la clase 'dv'
        let dv = 11 - ( acumulador % 11 );

        // es digito verificador 0 
        if( dv == 11 ){
            dv = '0';
        }
        // es digito verificador k
        if( dv == 10 ){
            dv = 'k';
        }

        return dv == this.dv.toLowerCase();  
    }


    formato(){
        if( !this.esValido ) return '';
        
        // expresión regular para agregar un separador de miles en un valor.
        return this.rut.toString().replace( /\B(?=(\d{3})+(?!\d))/g ,'.') + '-' + this.dv;
    }



}

 
