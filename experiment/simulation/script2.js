// Hide elements on page load
document.getElementById("gif").style.display="none";
document.getElementById("gif3").style.display="none";
document.getElementById("numpadbig").style.display="none";
document.getElementById("gif4").style.display="none";


// Click handler for png2 element
document.getElementById("png2").onclick = function()
{ 
    document.getElementById("png").style.display="none";
    document.getElementById("gif").style.display="inline";
    document.getElementById("gif4").style.display="inline";
    
    document.getElementById("png2").style.display="none";
    document.getElementById("gif2").style.display="none";
}

// Click handler for gif4 element    
document.getElementById("gif4").onclick = function()
{
    document.getElementById("numpadbig").style.display="inline";
    document.getElementById("gif4").style.display="none";
}


// Submit function for value validation
function tunnu()
{
    var numbox = document.getElementById("quantity").value;
    var numboxValue = parseFloat(numbox);
    
    // Check if the value is 3.5 or 3.50
    if (numboxValue == 3.5)
    {
        // Correct value - clear error message and proceed
        document.getElementById("numoutnext").innerHTML = "";
        document.getElementById("gif3").style.display="inline";
        document.getElementById("numpadbig").style.display="none";
    }
    else 
    {
        // Incorrect value - show red error message above numpad
        var errorMsg = document.getElementById("numoutnext");
        errorMsg.style.display = "block";
        errorMsg.style.position = "absolute";
        errorMsg.style.left = "400px";
        errorMsg.style.top = "250px";
        errorMsg.style.backgroundColor = "white";
        errorMsg.style.padding = "10px";
        errorMsg.style.border = "2px solid red";
        errorMsg.style.borderRadius = "5px";
        errorMsg.innerHTML = "<span style='color: red; font-weight: bold; font-size: 18px;'>❌ Insert 3.5</span>";
    }
}