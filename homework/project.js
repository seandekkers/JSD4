function pattern(n){
 var collect = [];
 var output="";
   for(var i = 0; i<=n; i++){
   collect[i] = n;
   console.log(n);
   output = toString(n/n);
   n--;
   collect.push(n);
   output = collect.toString();
   console.log(collect);
   //console.log(output);
   }
 return output;
}

console.log(pattern(4));