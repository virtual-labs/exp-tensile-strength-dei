var x = 0;
var myTimeout;
var myTimeout1;
document.getElementById("gif1").style.display="none";
document.getElementById("gif2").style.display="none";
document.getElementById("gif3").style.display="none";
document.getElementById("gif4").style.display="none";
document.getElementById("gif5").style.display="none";
document.getElementById("gif6").style.display="none";
document.getElementById("play1").style.display="none";




document.getElementById("play").onclick=function()
{
  
  if (x == 0)
    {
    document.getElementById("png").style.display="none";
    document.getElementById("gif").style.display="none";
    document.getElementById("gif1").style.display="inline";
     myTimeout = setTimeout(myGreeting, 6700);
   
  
  
    x=1;
    }

  else if(x == 1)
   {
    document.getElementById("gif1").style.display="none";
    document.getElementById("gif2").style.display="inline";
    document.getElementById("gif5").style.display="none";
    myTimeout = setTimeout(myGreeting, 6700);

  
    x=2;
   

   }

   else if(x ==2)
   {
    document.getElementById("gif2").style.display="none";
    document.getElementById("gif3").style.display="inline";
    document.getElementById("play1").style.display="inline";
    document.getElementById("gif5").style.display="none";
    myTimeout1 = setTimeout(myGreeting1, 7000);

  
    x=3;
   }

   
  }

  document.getElementById("play1").onclick=function()
  {
    document.getElementById("gif3").style.display="none";
    document.getElementById("gif4").style.display="inline";
    document.getElementById("gif5").style.display="none";
    document.getElementById("gif6").style.display="none";

  }




  
  
    function myGreeting()
     {
    document.getElementById("gif5").style.display="inline";
    myStopFunction();
  }
  
  function myStopFunction() {
    clearTimeout(myTimeout);

  
}

function myGreeting1()
     {
    document.getElementById("gif6").style.display="inline";
    myStopFunction();
  }
  
  function myStopFunctionn() {
    clearTimeout(myTimeout1);

  }



 