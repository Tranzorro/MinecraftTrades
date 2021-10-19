topbutton = document.getElementById("totopbutton");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        topbutton.style.display = "block";
    }
    else{
        topbutton.style.display = "none";
    }
}


function BacktoTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function ToolTipRPG(myClass, html){
    return '<div class= "' + myClass + '">' + html + '</div>';
}