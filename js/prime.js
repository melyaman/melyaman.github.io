function prime(){
  /*
  Outputs the number of primes less than n.
  */
          n=document.getElementById('num').value;
          m=parseInt(n); // used to validate the input.
          n=Math.ceil(n); // in case a float is given as input.
          var MAX = Math.pow(10,8);
          // input validation
          if(isNaN(m)){ 
            document.getElementById('resultPos').style.display="none";
          	document.getElementById('missingPos').style.display="inline-table";
          	document.getElementById('missingPos').innerHTML='Please enter a positive number';
          	return 0;
          }

          document.getElementById('missingPos').style.display="none";

          if(n<2){
            document.getElementById('printResult').innerHTML='0';
            document.getElementById('resultPos').style.display="inline-table";
            return 0; 
          }

          // if n is too large output an asymptotic approximation n/ln(n)
          if(n>MAX){
            document.getElementById('printResult').innerHTML='approximately '+Math.floor(n/Math.log(n));
            document.getElementById('resultPos').style.display="inline-table";
            return 0; 
          }

          // for n<MAX we use the Sieve of Eratosthene 

          var verdict = new Array(n);
          verdict[0],verdict[1]=false,false
          for(i=2;i<n;i++){
            verdict[i]=true;
          }

          for(i=2;i*i<n;i++){
            if(verdict[i]){
              for(j=i*i;j<n;j+=i){
                verdict[j]=false;
              }
            }
          }
          var sum = verdict.reduce(function(a, b) { return a + b; }, 0);

          document.getElementById('printResult').innerHTML=sum;
          document.getElementById('resultPos').style.display="inline-table";
        }
