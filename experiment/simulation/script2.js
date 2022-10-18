document.getElementById("gif").style.display="none";
document.getElementById("gif3").style.display="none";
document.getElementById("numpadbig").style.display="none";
document.getElementById("gif3").style.display="none";
document.getElementById("gif4").style.display="none";


 document.getElementById("png2").onclick=function()
{ 
    document.getElementById("png").style.display="none";
    document.getElementById("gif").style.display="inline";
    document.getElementById("gif4").style.display="inline";
    
    document.getElementById("png2").style.display="none";
    document.getElementById("gif2").style.display="none";
}
    
document.getElementById("gif4").onclick=function()
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
    if (numbox == 3.50)
    {
        document.getElementById("numoutnext").innerHTML = "";
        document.getElementById("gif3").style.display="inline";
        document.getElementById("numpadbig").style.display="none";
        
    }
    
    else 
    {
     document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>is 3.5 for speciman";
        
    }

}
