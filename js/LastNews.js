//Varibles
var jason, result, d, img, element, h1, prise, readMore, dots, moreText, k;
//AJX
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.status == 200)
    if (xhr.readyState == 4) {
      jasonEle();
    }
};

xhr.open("GET", "lastnews.JSON");
xhr.send();

//Function
function jasonEle() {
  jason = xhr.responseText;
  result = JSON.parse(jason);
  var index = 0;
  var index1 = 200;
  for (var i in result) {
    index++;
    index1++;
    d = document.createElement("div");
    //Add id attr  wiz value of index1 to <div>
    d.setAttribute("id", index1);
    console.log(index1);
    prise = document.createElement("h4");
    readMore = document.createElement("button");
    readMore.setAttribute("id", index);
    console.log(index);

    readMore.innerHTML = "Read_More";
    var Img = document.createElement("img");
    h1 = document.createElement("h1");

    moreText = result[i].name;
    // let str = "Hello. world!"; // Returns "e
    // console.log(str.split("."));
    dots = moreText.split(".");
    d.innerHTML = dots[0];
    d.appendChild(h1);
    d.appendChild(readMore);

    readMore.addEventListener("click", function () {
      if ((d.innerHTML = dots)) {
        console.log("Show me ");
        // d.innerHTML=dots;
        // console.log(document.getElementById("201"));
        document.getElementById("201").innerHTML = dots;

        //    document.writeln(d.innerHTML = dots);
      }
      // moreText.k = "none";

      //dots[1].style.display="inline"
      //d.appendChild(dots);
    });
    d.appendChild(Img);
    //Create div elem with txt
    document.body.appendChild(d);

    //CSS
    Img.src = result[i].Image;
    Img.style.width = "280px";
    Img.style.display = "inline-block";
    d.style.lineHeight = "30px";
    Img.style.height = "300px";
    Img.style.width = "390px";
    d.style.border = "1px solid  red";
    d.style.float = "left";
    d.style.borderInlineWidth = "5px";
    d.style.resize = "none";
    d.style.margin = "20px";
    d.style.width = "400px";
    d.style.height = "600px";
    h1.style.margin = "20px";
    d.style.color = "black";
    d.style.fontSize = "30px";
    (d.style.fontFamily = " Franklin Gothic Medium"),
      "Arial Narrow",
      " Arial, sans-serif";

    //  //Element will not be displayed
    //  k = this.style.display;
    //  if (dots.k === "none") {
    //    redmore.innerText = "Read All News";
    //    console.log(redmore.innerText);
    //    //note
    //  //dots.k = "inline";
    //   // moreText.k = "none";
    //  } else {
    //    redmore.innerText = "Read Less News";
    //    console.log(redmore.innerText);
    //    //note
    //   // dots.k = "none";
    //   // moreText.k = "inline";
  }
}
