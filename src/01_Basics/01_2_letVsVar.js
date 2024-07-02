var a = 5; //function-scoped: available throughout
let b = 5; //block-scoped only, cannot be re-declared in same scope.

function varScoping() {
    var x = 1;
  
    if (true) {
      var x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 2
  }
  
  function letScoping() {
    let x = 1;
  
    if (true) {
      let x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 1
  }

varScoping();
letScoping();

function varAndLetScoping() {
    var x = 1;
  
    if (true) {
      let x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 1
  }
