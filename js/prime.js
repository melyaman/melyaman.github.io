function prime(){
          n=document.getElementById('num').value;
          m=parseInt(n);
          n=Math.ceil(n);

          if(isNaN(m)){
            document.getElementById('resultPos').style.display="none";
          	document.getElementById('missingPos').style.display="inline-table";
          	document.getElementById('missingPos').innerHTML='please enter a positive number';
          	return 0;
          }

          document.getElementById('missingPos').style.display="none";

          if(n<2){
            document.getElementById('printResult').innerHTML='total number : 0';
            document.getElementById('resultPos').style.display="inline-table";
            return 0; 
          }
         
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
