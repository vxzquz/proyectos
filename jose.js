function jose(min, max) 
{
  var numero;
  do 
    {
    numero = prompt ("escribe un número entre " + min +" y " + max + ":");
    numero = Number(numero);
    }  
  while (numero<min || numero>max);
return numero;
}
function josemi(texto,min, max) 
{
  var numero;
  do 
    {
    numero = prompt ("escribe un número entre " + min +" y " + max + ":");
    numero = Number(numero);
    }  
  while (numero<min || numero>max);
return numero;
}
