    var loc=window.location.href;
    var index = loc.indexOf("?");
    index += 1;
    var x = loc.substring(index);
    document.getElementById("x").textContent=("you blocked from this site cause this site dont allow users from "+x)
    document.title="you blocked "+x
