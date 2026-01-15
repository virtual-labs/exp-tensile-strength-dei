document.getElementById("gif1").style.display="none";
document.getElementById("gif2").style.display="none";
document.getElementById("play1").style.display="none";
document.getElementById("play2").style.display="none";
document.getElementById("gif3").style.display="none";
document.getElementById("numpadbig").style.display="none";
document.getElementById("gif4").style.display="none";
document.getElementById("png1").style.display="none";


 document.getElementById("play").onclick=function()
{ 
    document.getElementById("png").style.display="none";
    document.getElementById("gif1").style.display="inline";
    document.getElementById("play2").style.display="inline";
    document.getElementById("play").style.display="none";
    myTimeout = setTimeout(myGreeting, 2500);
    document.getElementById("gif").style.display="none";
}
  
document.getElementById("play2").onclick=function()
{
    document.getElementById("png1").style.display="inline";
    document.getElementById("gif4").style.display="inline";
    document.getElementById("play1").style.display="inline";
    document.getElementById("gif1").style.display="none";
    document.getElementById("gif3").style.display="none";
    document.getElementById("play2").style.display="none";
    
}

document.getElementById("play1").onclick=function()
{
    document.getElementById("numpadbig").style.display="inline";
    document.getElementById("gif4").style.display="none";
   
    
}




function tunnu()

{ 
    //var ctext = Click Next ;
    var numbox = document.getElementById("quantity").value;
    //alert(size);
    //alert(numbox);
    if (numbox == 120)
    {
        document.getElementById("numoutnext").innerHTML = "";
        document.getElementById("gif2").style.display="inline";
        document.getElementById("numpadbig").style.display="none";
        myTimeout3 = setTimeout(myGreeting3, 9000);
    }
    
    
     else {
  document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>120gm for specimen";
  document.getElementById("numoutnext").style.display = "block"; // show the message

  setTimeout(function() {
    document.getElementById("numoutnext").style.display = "none"; // hide after 4 seconds
  }, 2000);
}
        
    

}

function myGreeting()
     {
    document.getElementById("gif3").style.display="inline";
    myStopFunction();
  }
  
  function myStopFunction() {
    clearTimeout(myTimeout);

  
}
function myGreeting3()
     {
    document.getElementById("next").style.visibility="visible";
    myStopFunction3();
  }
  
  function myStopFunction3() {
    clearTimeout(myTimeout3);

  
}