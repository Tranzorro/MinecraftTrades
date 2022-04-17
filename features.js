topbutton = document.getElementById("totopbutton");
main = document.getElementById('trades');
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(main.scrollTop > 20 || document.documentElement.scrollTop >20){
        topbutton.style.display = "block";
    }
    else{
        topbutton.style.display = "none";
    }
}


function BacktoTop(){
    main.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function ToolTipRPG(myclass, html){
    return '<div class= "' + myclass + '">' + html + '</div>';
}