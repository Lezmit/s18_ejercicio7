
window.alert("Ejercicio 1: Verificar si el número es par o impar");
var num = parseInt(prompt("Ingrese número: "));
if(num>0 && num<101){
	if(num%2==0){
		if (num>1 && num<6) {
			document.write("Good!");
		}
		else if (num>5 && num<21) {
			document.write("Great!");
		}
		else if (num>20) {
			document.write("Perfect!");
		}
	}
	else{
		document.write("Odd");
	}
}
  