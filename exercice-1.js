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

console.log("Suite de Fibonacci : ");
for(var I=0;I<21;I++) {
    console.log(Fibonacci(I));
}