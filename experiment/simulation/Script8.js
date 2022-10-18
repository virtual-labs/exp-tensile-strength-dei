document.getElementById("gif").style.display="none";
document.getElementById("png1").style.display="none";
document.getElementById("gif1").style.display="none";
document.getElementById("gif2").style.display="none";
document.getElementById("play1").style.display="none";
document.getElementById("play2").style.display="none";
document.getElementById("play3").style.display="none";
document.getElementById("arr1").style.display="none";
document.getElementById("arr2").style.display="none";


 document.getElementById("play").onclick=function()
{ 
    document.getElementById("png").style.display="none";
    document.getElementById("gif").style.display="inline";
    document.getElementById("play1").style.display="inline";
    document.getElementById("play").style.display="none";
    myTimeout = setTimeout(myGreeting, 15000);
    document.getElementById("arr").style.display="none";
}
  
document.getElementById("play1").onclick=function()
{
    document.getElementById("png1").style.display="inline";
    document.getElementById("play2").style.display="inline";
    //document.getElementById("arr2").style.display="inline";
    document.getElementById("gif").style.display="none";
    document.getElementById("arr1").style.display="inline";
    document.getElementById("play1").style.display="none";
    
}

document.getElementById("play2").onclick=function()
{
    document.getElementById("gif1").style.display="inline";
    myTimeoutt = setTimeout(myGreeting1, 2000);
    document.getElementById("play3").style.display="inline";
    document.getElementById("png1").style.display="none";
    document.getElementById("arr1").style.display="none";
    document.getElementById("play1").style.display="none";

    
}

document.getElementById("play3").onclick=function()
{
    document.getElementById("gif2").style.display="inline";
    document.getElementById("arr2").style.display="none";
    document.getElementById("play3").style.display="none";
    

    
}
function myGreeting()
     {
    document.getElementById("arr1").style.display="inline";
    myStopFunction();
  }
  
  function myStopFunction() {
    clearTimeout(myTimeout);

  
}

function myGreeting1()
     {
    document.getElementById("arr2").style.display="inline";
    myStopFunction();
  }
  
  function myStopFunction() {
    clearTimeout(myTimeout);

  
}