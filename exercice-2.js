function Fibonacci(n) {
   var w;
   if(n <= 0) return 0;
   if(n == 1) return 1;
   var u = 0;
   var v = 1;
   for(var i=2; i <= n; i++) {
       w = u+v;
       u = v;
       v = w;
   };
   return v;
}    

var J = prompt("Choisir le nombre d'éléments de la suite de Fibonacci", "0");
for(I=0;I<=J;I++) {
    document.write("Fibonacci("+I+")="+Fibonacci(I)+"<BR>");
}