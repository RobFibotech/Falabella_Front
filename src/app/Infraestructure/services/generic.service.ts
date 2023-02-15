import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor() { }

  ngPermite(elEvento: KeyboardEvent , permitidos: string | string[]) {
    // Variables que definen los caracteres permitidos
    var numeros = "0123456789";
    var acent = "áéíóúÁÉÍÓÚ";
    var textArea = "()./-";
    var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var numeros_caracteres = numeros + caracteres + acent + textArea;
    var teclas_varias = " ,.;:-_@()#¡!¿?%=´";
    var todos = numeros_caracteres + teclas_varias;
    var teclas_especiales = [8, 37, 39, 46, 0, 9];
    var tipo;
    var separadores = ".,";
    var sangre = "aboABO+-";
    var direcciones = numeros + separadores + caracteres + acent + "#()";
    // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = Comill simple

    tipo = permitidos;

    // Seleccionar los caracteres a partir del parámetro de la función
    switch (permitidos) {
        case 'num':
            permitidos = numeros;
            break;
        case 'real':
            permitidos = numeros + ".";
            break;
        case 'car':
            permitidos = caracteres + acent;
            break;
        case 'num_car':
            permitidos = numeros_caracteres;
            break;
        case 'todos':
            permitidos = todos;
            break;
        case 'email':
            permitidos = caracteres + ".@_-" + numeros;
            break;
        case 'tel':
            permitidos = "()-" + numeros;
            break;
        case 'Fec':
            permitidos = "/" + numeros;
            break;
        case 'NomEsp':
            permitidos = caracteres + separadores + acent + numeros + "-_'";
            break
        case 'NumLet':
            permitidos = numeros + caracteres;
            break;
        case 'Direccion':
            permitidos = direcciones;
            break;
        case 'car_spunto':
            permitidos = acent + caracteres;
            break;
        case 'NumLetSep':
            permitidos = numeros + caracteres + separadores;
            break;
        case 'sangre':
            permitidos = sangre;
            break;
        case 'carMay':
            permitidos = caracteres + acent;
            break;
        case 'caracteres':
            permitidos = caracteres;
            break;
    }

    // Obtener la tecla pulsada 
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    var caracter = String.fromCharCode(codigoCaracter);
    //alert(evento.charCode);

    // Comprobar si la tecla pulsada es alguna de las teclas especiales
    // (teclas de borrado y flechas horizontales)
    //  var tecla_especial = false;
    //  for (var i in teclas_especiales) {
    //      if (codigoCaracter == teclas_especiales[i]) {
    //          if (evento.charCode == 46) {
    //              if (tipo == "real" || tipo == "car") {
    //                  tecla_especial = true;
    //              }
    //          }
    //          else {
    //              tecla_especial = true;
    //          }
    //          break;
    //      }
    //  }

    // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
    // o si es una tecla especial  
    if (tipo === 'carMay') {
        caracter = caracter.toUpperCase();
    }
    //  return permitidos.indexOf(caracter) != -1 || tecla_especial;
    return permitidos.indexOf(caracter) != -1;
}

}
