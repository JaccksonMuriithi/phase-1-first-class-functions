function receivesAFunction(spy){
    spy(); 
  }
  function returnsANamedFunction(){
    return function spy(){
  
    }  
  }
  function returnsAnAnonymousFunction(){
      return function (){
  
      } 
  }

