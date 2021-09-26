var jason, result, d, img, element, h1;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.status == 200)
    if (xhr.readyState == 4) {
      jason = xhr.responseText;
      result = JSON.parse(jason);
      jasonElemnt();
    }
};

function jasonElemnt() {
  for (var i in result) {
    d = document.createElement("div");
    var Img = document.createElement("img");
    h1 = document.createElement("h1");
    d.innerHTML = result[i].name + "<br/>" + result[i].prise;
    d.appendChild(h1);
    d.appendChild(Img);
    document.body.appendChild(d);

    Img.src = result[i].Image;
    Img.style.width = "300px";
    Img.style.display = " inline-block";
    d.style.lineHeight = "30px";
    Img.style.height = "300px";
    d.style.border = "1px solid  red";
    d.style.float = "left";
    d.style.margin = "20px";
    h1.style.margin = "30px";
    d.style.color = "black";
    d.style.fontSize = "20px";
    (d.style.fontFamily = " Franklin Gothic Medium"),
      "Arial Narrow",
      " Arial, sans-serif";
  }
}

xhr.open("GET", "market.JSON");
xhr.send();
