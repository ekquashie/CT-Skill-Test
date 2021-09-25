

var tabs = document.getElementsByClassName("tabcontent");

tabs.addEventListener("click", openContent); 

function openContent(evt, content) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for(i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(content).style.display = "block";
    evt.currentTarget.className += " active";

}

function currentSlide(evt, content) {
    var i, slidecontent, slidebtn;

    slidecontent = document.getElementsByClassName("carousel");

    for(i = 0; i < slidecontent.length; i++) {
        slidecontent[i].style.display = "none";
    }

    slidebtn = document.getElementsByClassName("dot");

    for(i = 0; i < slidebtn.length; i++) {
        slidebtn[i].className = slidebtn[i].className.replace("active", "");
    }

    document.getElementById(content).style.display = "block";
    evt.currentTarget.className += " active";
}
