document.getElementById("gif").style.display="none";

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
  
    document.getElementById("gif3").style.display="inline";
    document.getElementById("png2").style.display="none";
    document.getElementById("gif").style.display="none";
    document.getElementById("gif4").style.display="none";
    
}