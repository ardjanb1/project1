function llogarit(){
    const num1=parseFloat(document.getElementById('num1').value);
    const num2=parseFloat(document.getElementById('num2').value);
    
      if( isNaN(num1) || isNaN(num2)){
         rezultati="Kujdes numrat duhet te jene pozitiv";
      }
      else{
        rezultati=num1+num2;
      }
    
    document.getElementById('rezultati').textContent=`${rezultati}`;
    
    }
    
    function llogaritz(){
        const num1=parseFloat(document.getElementById('num1').value);
        const num2=parseFloat(document.getElementById('num2').value);
        
          if( isNaN(num1) || isNaN(num2)){
             rezultati="Kujdes numrat duhet te jene pozitiv";
          }
          else{
            rezultati=num1-num2;
          }
        
        document.getElementById('rezultati').textContent=`${rezultati}`;
        
        }
