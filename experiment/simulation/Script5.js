document.getElementById("gif").style.display="none";
document.getElementById("gif1").style.display="none";
document.getElementById("play1").style.display="none";
document.getElementById("arr1").style.display="none";


 document.getElementById("play").onclick=function()
{ 
    document.getElementById("png").style.display="none";
    document.getElementById("gif").style.display="inline";
    document.getElementById("play1").style.display="inline";
    document.getElementById("play").style.display="none";
    myTimeout = setTimeout(myGreeting, 2000);
    document.getElementById("arr").style.display="none";
}
  
document.getElementById("play1").onclick=function()
{
    document.getElementById("gif1").style.display="inline";
    document.getElementById("gif").style.display="none";
    document.getElementById("arr1").style.display="none";
    document.getElementById("play1").style.display="none";
    myTimeout4 = setTimeout(myGreeting4, 9000);
}

function myGreeting()
     {
    document.getElementById("arr1").style.display="inline";
    myStopFunction();
  }
  
  function myStopFunction() {
    clearTimeout(myTimeout);

  
}
function myGreeting4()
     {
    document.getElementById("next").style.visibility="visible";
    myStopFunction4();
  }
  
  function myStopFunction4() {
    clearTimeout(myTimeout4);

  
}