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
    myTimeout = setTimeout(myGreeting, 6000);
    document.getElementById("arr").style.display="none";
}
  
document.getElementById("play1").onclick=function()
{
    document.getElementById("gif1").style.display="inline";
    document.getElementById("gif").style.display="none";
    document.getElementById("arr1").style.display="none";
    document.getElementById("play1").style.display="none";
    
}

function myGreeting()
     {
    document.getElementById("arr1").style.display="inline";
    myStopFunction();
  }
  
  function myStopFunction() {
    clearTimeout(myTimeout);

  
}