//Functions,Scope and Call backs
//function expresion
const myFunction = function (n1, n2) {
    return n1 * n2;
  };
  myFunction(2, 4);
  // 8
  
  function average(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
  }
  average.length;
  // 3
  average.name;//functions are objcts and you can ccess to it
  // average

  /***** Functions can return another functions****/
   function called () {
    alert("First Ive been called");
  
        return function() {
     alert("Im next on line");
   };
  }
  //we are passing a function 
  let callingAnotherFuncion = called();
  //Expcted both outputs
  callingAnotherFuncion()()//First ive been called


  /****CallBack Function*****/
function addingMath(num, addingFunction){
  return num + addingFunction();//we have to 
}
//we are going to invoke the addingFunction
function returnsWhatIsAsked() {
  return 10;
}
//now we can give values to num and callculation will be made
addingMath(20, returnsWhatIsAsked);// 10 +20 = 30





