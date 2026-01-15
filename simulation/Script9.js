var logorep = 0;
var z = 0;


var size = 0;
var age = 0;
var logo = 0;
function agesizeIn() {

    age = document.getElementById("ageIn").value;


    if (age !== "") {

        var date1 = new Date(age);
        var today = new Date();


        logo = new Date(date1);

        //Month Print
        document.getElementById("demo").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demo2").innerHTML = logo.getDate();
        //Year Print

        //-----------------------------------------------
        document.getElementById("cube").style.visibility = "visible";

        document.getElementById("cubedatehidden").style.visibility = "visible";
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("in2").style.visibility = "hidden";


    }

    else {
        document.getElementById("fillBox").innerHTML = "Please Enter Date";
        //alert("Wrong");

    }
    
    var date=age.split('-')
    



    document.getElementById("cubedate").innerText=date[2]+'/'+date[1];
    document.getElementById("cubedate1").innerText=date[2]+'/'+date[1];
    document.getElementById("cubedate2").innerText=date[2]+'/'+date[1];
    
}


function nextpage() {
    document.getElementById("canvas").style.visibility = "hidden";
    document.getElementById("canvas1").style.visibility = "visible";
}

function movecube() {
    document.getElementById("png").style.animationPlayState = "running";
    document.getElementById("png").style.animationIterationCount = "1";
    document.getElementById("cubedate").style.animationPlayState = "running";
    document.getElementById("cubedate").style.animationIterationCount = "1";
    document.getElementById("cubedatehidden").style.animationPlayState = "running";
    document.getElementById("arrowcube1").style.visibility = "hidden";
    document.getElementById("arrowcube2").style.visibility = "visible";


}

function movecubei() {
    document.getElementById("png1").style.animationPlayState = "running";
    document.getElementById("png1").style.animationIterationCount = "1";
    document.getElementById("cubedate1").style.animationPlayState = "running";
    document.getElementById("cubedate1").style.animationIterationCount = "1";
    document.getElementById("cubedatehidden").style.animationPlayState = "running";
    document.getElementById("arrowcube2").style.visibility = "hidden";
    document.getElementById("arrowcube3").style.visibility = "visible";


}

function movecubea() {
    document.getElementById("png2").style.animationPlayState = "running";
    document.getElementById("png2").style.animationIterationCount = "1";
    document.getElementById("cubedate2").style.animationPlayState = "running";
    document.getElementById("cubedate2").style.animationIterationCount = "1";
    document.getElementById("cubedatehidden").style.animationPlayState = "running";
    document.getElementById("arrowcube3").style.visibility = "hidden";
    document.getElementById("cth").style.visibility = "visible";
    document.getElementById("gif2").style.visibility = "visible";


}
function cloth() {
    document.getElementById("cth").style.animationPlayState = "running";
    document.getElementById("cth").style.animationIterationCount = "1";
    myTimeout = setTimeout(myGreeting, 3000);
    document.getElementById("gif2").style.visibility = "hidden";
    myTimeout = setTimeout(myGreetinga, 1500);


}

function myGreeting() {
    document.getElementById("cth").style.visibility = "hidden";
    document.getElementById("next1").style.visibility = "visible";

    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout);

}

function myGreetinga() {
    document.getElementById("png").style.visibility = "hidden";
    document.getElementById("png1").style.visibility = "hidden";
    document.getElementById("png2").style.visibility = "hidden";
    document.getElementById("png6").style.visibility = "visible";
    document.getElementById("png7").style.visibility = "visible";
    document.getElementById("png8").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout);

}

