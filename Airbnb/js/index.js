function getFileName(){
    return window.location.href.split('/').pop();
}

switch(getFileName()){
    case "home.php":
        var openAdd = document.getElementById("green1");
        openAdd.classList.add("open");
        break;
}