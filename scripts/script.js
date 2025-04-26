
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
      renderPriceList();
  });
}


  function renderInfoTxt() {
    let contentRef = document.getElementById('infoText');
    contentRef.innerHTML ="";
    contentRef.innerHTML += getInfoTemplate();
  }

  function renderPriceList() {
    let contentRef = document.getElementById('priceList');
    contentRef.innerHTML ="";
    for (let i = 0; i < list.length; i++) {
      let price1 = list[i].price1;
      let price2 = list[i].price2;
      let price3 = list[i].price3;
      let price4 = list[i].price4;
      let price5 = list[i].price5;
      let price6 = list[i].price6;
      let price7 = list[i].price7;
      let price8 = list[i].price8;
      let price9 = list[i].price9;
      let price10 = list[i].price10;
      contentRef.innerHTML += getPriceTemplate(price1, price2, price3, price4, price5, price6, price7, price8, price9, price10);
    }
  }

  function getInfoTemplate() {

    return `
        <div class="infoContent">
            <h2>Meine Leisungen für ihre "energetischen" Fragen und Wünsche.</h2>
            <ul>
                <li>Verbrauchs und Bedarfsausweise</li>
                <li>Energetische Gebäudebeurteilung mit unverbindlichen Sanierungstipps</li>
                <li>Rechnerische energetische Gebäudebeurteilung mit Verlustanalyse</li>
                <li>Individueller Sanierungsfahrplan (ISFP)</li>
                <li>Heizlastberechnung</li>
                <li>energetische Baubegleitung</li>
                <li>Vorträge zum Thema Energieberatung inkl. Ihrer Fragen</li>
            </ul>

            <p class="infoPara">Ihr Thema war nicht dabei? Sie haben noch Fragen?</p>
            <a class="infoLink" href="#" src="">Dann kontacktieren Sie uns</a>
        </div>
    `;
  }

  function getPriceTemplate(price1, price2, price3, price4, price5, price6, price7, price8, price9, price10) {

    return `
      <div class="priceContent">
        <h2>Weil mir Transperenz und Verbindlichkeit wichtig ist.</h2>
        <div class="priceList">
          <div class="priceBox">
            <h3>Verbrauchsausweise</h3>
            <p class="pricePara">Grundpreis ${price1}</p>
            <p class="pricePara">je m<sup>2</sup> ${price2}</p>
          </div>
          <div class="priceBox">
            <h3>Bedarfsausweis</h3>
            <p class="pricePara">mit aktuellen Gebäudedaten ${price3}</p>
            <p class="pricePara">mit Datenaufnehme ${price4}</p>
          </div>
          <div class="priceBox">
            <h3>Unverbindliche energetische Beurteiling</h3>
            <p>vor Ort < 1h ${price5}</p>
          </div>
          <div class="priceBox">
            <h3>Energetische Gebäudeberechnung mit Protokolierung</h3>
            <p>Mit unverbindlichen Sanierungsempfehlungen ${price6}</p>
          </div>
          <div class="priceBox">
            <h3>Individueller Sanierungsfahrplan(ISFP)</h3>
            <p> <3 Wocheneinheiten ${price7}</p>
            <p> <6 Wocheneinheiten ${price8}</p>
            <p>je weiter Wocheneinheit +${price9}</p>
          </div>
          <div class="priceBox">
            <h3>Einzelmaßnahmen für Förderungen ${price10}</h3>
          </div>
          <div class="priceFooter">
            <a class="priceLink">weitere Tätigkeiten auf Anfrage</a>
            <l>Preise können sich je nach zeitlichem oder erhötem Aufwand ändern.</l>
          </div>
        </div>
      </div>
    `;
  }