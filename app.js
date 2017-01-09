var array = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

var req = getXMLHttpRequest();
req.open("GET","read.php",false);
req.send(null);
var read = req.responseText;

var color = "red";
for(var i = 0; i < array.length; i++) {
    if(parseInt(read[i]) === 1){
      color = "green";
    }
    else{
      color = "red";
    }
    var b = document.createElement("BUTTON");
    var textnode = document.createTextNode("LED_"+array[i]+" ");
    b.style.backgroundColor = color;
    b.id = array[i];
    b.appendChild(textnode);
    document.body.appendChild(b);
}
// document.write(navigator.appName);

function getXMLHttpRequest() {
	var xhr = null;

	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest();
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
  //alert(xhr);
	return xhr;
}

function reaload(){
  var array = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
  var elems = document.getElementsByTagName("BUTTON");
  var req = getXMLHttpRequest();
  req.open("GET","read.php",false);
  req.send(null);
  var read = req.responseText;

  var color = "red";
  for(var i = 0; i < array.length; i++) {

      if(parseInt(read[i]) === 1){
        color = "green";
      }
      else{
        color = "red";
      }
      elems[i].style.backgroundColor = color;
  }

}

function changer(e){
  //reaload();
  var ajax = getXMLHttpRequest();
  if (e.target.style.backgroundColor == "green") {
    e.target.style.backgroundColor = "red";
    ajax.open("GET","off.php?button="+e.target.id,false);
  }else {
    e.target.style.backgroundColor = "green";
    ajax.open("GET","on.php?button="+e.target.id,false);
  }
  ajax.send(null);

}

var list = document.getElementsByTagName("BUTTON");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", changer, false);
}
