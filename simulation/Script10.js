function movecube() {
    document.getElementById("png2").style.animationPlayState = "running";
    document.getElementById("png2").style.animationIterationCount = "1";
    document.getElementById("gif1").style.visibility = "hidden";
    document.getElementById("gif2").style.visibility = "visible";
    document.getElementById("transp").style.visibility = "visible";
}

function movecubea() {
    document.getElementById("png3").style.animationPlayState = "running";
    document.getElementById("png3").style.animationIterationCount = "1";
}

function movecubeb() {
    document.getElementById("png4").style.animationPlayState = "running";
    document.getElementById("png4").style.animationIterationCount = "1";
}

function movearm() {
   
    document.getElementById("png1").style.animationPlayState = "running";
    document.getElementById("png1").style.animationIterationCount = "1";
    document.getElementById("gif").style.visibility = "hidden";
    document.getElementById("transp1").style.visibility = "visible";
    myTimeout = setTimeout(myGreeting, 1000);
    
    
}

function movearmdo(){
    document.getElementById("png8").style.animationPlayState = "running";
    document.getElementById("png8").style.animationIterationCount = "1";
    // document.getElementById("png7").style.animationPlayState = "running";
    // document.getElementById("png7").style.animationIterationCount = "1";
    myTimeout1 = setTimeout(myGreeting1, 1000);

}

document.getElementById("transp1").onclick=function()
{
    movecube();
}


document.getElementById("transp").onclick=function()
{   document.getElementById("gif2").style.visibility = "hidden";
    document.getElementById("numpadbig").style.visibility="visible";
    // document.getElementById("gif4").style.display="none";
}

function tunnu()

{debugger;
    var newkey=document.getElementById("png1");
    
    //var ctext = Click Next ;
    var numbox = document.getElementById("quantity").value;
    //alert(size);
    //alert(numbox);
    if (numbox == 3.50)
    {
        document.getElementById("numoutnext").innerHTML = "";
        mycubehide();
        // document.getElementById("png7").style.visibility = "visible";
        // document.getElementById("png4").style.visibility = "visible";
        document.getElementById("png2").style.visibility = "hidden";
        document.getElementById("png8").style.visibility = "visible";
        document.getElementById("png6").style.visibility = "visible";
        document.getElementById("png1").style.visibility = "hidden";
        movearmdo();
        document.getElementById("numpadbig").style.display="none";
     
        
    }
    
    else 
    {
     document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>is 3.5 for speciman";
        
    }

   
}





function myGreeting() {
    document.getElementById("gif1").style.visibility = "visible";
   

    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout);

}
function myGreeting1() {
    document.getElementById("comp1").style.visibility = "visible";
    document.getElementById("next1").style.visibility = "visible";
   

    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout1);

}

function mycubehide() {
    movecubenew();
    
   myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout);

}
function movecubenew(){debugger;
    // document.getElementById("png7").style.animationPlayState = "running";
    // document.getElementById("png7").style.animationIterationCount = "1";
    document.getElementById("png5").style.visibility = "hidden";



}