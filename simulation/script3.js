document.getElementById("gif").style.display="none";

document.getElementById("png2").onclick=function()
{
    document.getElementById("png").style.display="none";
    document.getElementById("gif").style.display="block";
    document.getElementById("png2").style.display="none";
    document.getElementById("gif2").style.display="none";
    myTimeout = setTimeout(myGreeting, 8000);
    myTimeout1 = setTimeout(myGreeting1, 12000);
    myTimeout2 = setTimeout(myGreeting2, 10000);
}
function myGreeting()
     {
    document.getElementById("next").style.visibility="visible";
    myStopFunction();
  }
function myStopFunction() {
    clearTimeout(myTimeout);  
}
function myGreeting1()
     {
    document.getElementById("next1").style.visibility="visible";
    myStopFunction1();
  }
  
  function myStopFunction1() {
    clearTimeout(myTimeout1);

  
}
function myGreeting2()
     {
    document.getElementById("next2").style.visibility="visible";
    myStopFunction2();
  }
  
  function myStopFunction2() {
    clearTimeout(myTimeout2);

  
}