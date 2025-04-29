
function includeHTML(callback) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                  if (this.status == 200) {
                      elmnt.innerHTML = this.responseText;
                  }
                  if (this.status == 404) {
                      elmnt.innerHTML = "Page not found.";
                  }
                  elmnt.removeAttribute("w3-include-html");
                  includeHTML(callback);
              }
              if (this.readyState == 4 && i == z.length - 1) {
                  callback();
              }
          }
          xhttp.open("GET", file, true);
          xhttp.send();
          return;
      }
  }
}

function init() {
  includeHTML(function() {
      renderInfoTxt();
      renderConsultation();
      renderPriceList();
      renderMe();
  });
}

  function renderConsultation() {
    let contentRef = document.getElementsByTagName('consul');
    contentRef.innerHTML = "";
    contentRef.innerHTML += getConsulTemplate();
  }

  function renderInfoTxt() {
    let contentRef = document.getElementById('infoText');
    contentRef.innerHTML ="";
    contentRef.innerHTML += getInfoTemplate();
  }

  function renderPriceList() {
    let contentRef = document.getElementById('priceList');
    contentRef.innerHTML = "";
    for (let i = 0; i < prices.length; i++) {
      let pos1 = prices[i].position1;
      let pos2 = prices[i].position2;
      let pos3 = prices[i].position3;
      let pos4 = prices[i].position4;
      let pos5 = prices[i].position5;
      let pos6 = prices[i].position6;
      let pos7 = prices[i].position7;
      let pos8 = prices[i].position8;
      let pos9 = prices[i].position9;
      let pos10 = prices[i].position10;

      contentRef.innerHTML += getPriceTemplate(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10)
    }
  }

  function renderMe() {
    let contentRef = document.getElementById('aboutMe');
    contentRef.innerHTML = "";
    contentRef.innerHTML += aboutMeTemplate();
  }