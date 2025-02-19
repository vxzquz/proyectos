function primoono (numero)
  {
    var Primosi;
    var i;
    
    for (i=numero-1; i>=2; i=i-1 )
      {
        if ( numero % i == 0 )
        {
          Primosi = false;
          return Primosi;
        }


        
       }
    Primosi = true;
    return Primosi;
  }
