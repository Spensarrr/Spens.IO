function localSave(){
    localStorage.setItem("alias", document.getElementById('alias').value)
}

window.onload = function() {
    var alias = localStorage.getItem("alias");
    if (alias != null || alias != "") {
        document.getElementById('alias').value = alias;
    }
  };