
function cleartxt(){
    document.getElementById("sc").value = "";
}

function search(){
    if(document.getElementById("sc").value.includes("http") || document.getElementById("sc").value.includes("https")) {
        document.getElementById("wb").src = document.getElementById("sc").value;
        document.getElementById('wb').contentWindow.location.reload(true);
    } else {
        alert("Please put a url (https://exemple.com) !")
    }
}

function geturl() {
    alert(document.getElementById('wb').contentWindow.location);
    document.getElementById("sc").value = document.getElementById('wb').src;
}

function gb() {
    document.getElementById("wb").contentWindow.history.go(-1);
}

function gf() {
    document.getElementById("wb").contentWindow.history.forward();
}

function fl(str) {
    document.getElementById("wb").src = str;
    document.getElementById('wb').contentWindow.location.reload(true);
}

function af() {
    if(document.getElementById("sc").value.includes("http") || document.getElementById("sc").value.includes("https")) {
        var targetDiv = document.getElementById('fav');
        targetDiv.innerHTML += '<a id="url" onclick=' + 'fl(' + '"' + document.getElementById("sc").value + '"' + ')' + ">" + document.getElementById("sc").value + " <br/></a>";
        localStorage.setItem("fav", document.getElementById("fav").innerHTML);
    }

}

function cf() {
    while(document.getElementById("url")){
        document.getElementById("url").remove();
        localStorage.removeItem("fav");
    }
}

function hsf() {
    if (document.getElementById("tsf").innerHTML.includes("ᐁ")) {
        document.getElementById("fav").style.height = "0.1%";
        document.getElementById("tsf").innerHTML = "ᐃ";
        document.getElementById("tsf").style.fontSize = "12px";
        document.getElementById("fv").style.bottom = "5%";
        document.getElementById("fv").style.fontSize = "20px";
        document.getElementById("hsf").style.bottom = "6.5%";
        document.getElementById("wb").style.height = "83%";
    } else {
        document.getElementById("tsf").style.fontSize = "18px";
        document.getElementById("fav").style.height = "8%";
        document.getElementById("tsf").innerHTML = "ᐁ";
        document.getElementById("fv").style.bottom = "14%";
        document.getElementById("fv").style.fontSize = "25px";
        document.getElementById("hsf").style.bottom = "15.5%";
        document.getElementById("wb").style.height = "72%";
    }
}

function savefav() {
    //alert(document.getElementById("fav").innerHTML);
}

function loadfav() {
    document.getElementById("fav").innerHTML = localStorage.getItem("fav");
}
