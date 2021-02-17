function calculateSi(){
    var p = 0;
    var y = 0;
    var r = 0;
    var si = 0;

    p = parseInt(document.getElementById("principal").value);
    y = parseInt(document.getElementById("years").value);
    r = parseInt(document.getElementById("rate").value);

    si = (p * y * r)  / 100;
    document.getElementById("ans").innerHTML = si;
  }