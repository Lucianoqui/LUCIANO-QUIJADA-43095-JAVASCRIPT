let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas:"));
let tipoTiempo = parseInt(prompt("Ingrese el tipo de Tiempo: 1 Para el tiempo completo / 2 Para tiempo completo y horas extras"));
let horasExtras;
const descuentos = 20;
const tarifa = 200;


while((horasTrabajadas <= 0 || horasTrabajadas > 250 )){
  horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas no pueden ser mas de 250"));
}

if((tipoTiempo != 1) && (tipoTiempo != 2)){
  tipoTiempo = parseInt(prompt("Ingrese el tipo de Tiempo: 1 Para el tiempo completo / 2 Para tiempo completo y horas extras"));
}



const CalculoTiempoCompleto = (horasTrabajadas, horasExtras, descuentos, tarifa) => {
  let sueldo = horasTrabajadas * tarifa;
  if(tipoTiempo == 1){
  let tarifaDescuento = sueldo - ((sueldo * descuentos) / 100); 
return tarifaDescuento;
}else if(tipoTiempo == 2){
 horasExtras = parseInt(prompt("Ingrese las horas extras:"));
 let tarifaExtra = horasExtras  * 400;
 let tarifaAlta = (sueldo - ((sueldo * descuentos) / 100)) + tarifaExtra;
  return tarifaAlta; 

}
}

let paga = CalculoTiempoCompleto(horasTrabajadas, horasExtras,  descuentos, tarifa);

alert("Nombre: " + nombre + "\n" + "Apellido: " + apellido + "\n" + "Horas Trabajadas: " +  horasTrabajadas  + "\n" + "Tipo de Tiempo: " + tipoTiempo + "\n" + "Su sueldo es de: $" + paga);