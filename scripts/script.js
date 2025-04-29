
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
      renderMe();
  });
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

  function getPriceTemplate(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10) {

    return `
      <div class="priceContent">
        <h2>Weil mir Transperenz und Verbindlichkeit wichtig ist.</h2>
        <div class="priceList">
          <div class="priceBox">
            <h3>Verbrauchsausweise</h3>
            <p class="pricePara">Grundpreis ${pos1}</p>
            <p class="pricePara">je m<sup>2</sup> ${pos2}</p>
          </div>
          <div class="priceBox">
            <h3>Bedarfsausweis</h3>
            <p class="pricePara">mit aktuellen Gebäudedaten ${pos3}</p>
            <p class="pricePara">mit Datenaufnehme ${pos4}</p>
          </div>
          <div class="priceBox">
            <h3>Unverbindliche energetische Beurteiling</h3>
            <p>vor Ort < 1h ${pos5}</p>
          </div>
          <div class="priceBox">
            <h3>Energetische Gebäudeberechnung mit Protokolierung</h3>
            <p>Mit unverbindlichen Sanierungsempfehlungen ${pos6}</p>
          </div>
          <div class="priceBox">
            <h3>Individueller Sanierungsfahrplan(ISFP)</h3>
            <p> <3 Wocheneinheiten ${pos7}</p>
            <p> <6 Wocheneinheiten ${pos8}</p>
            <p>je weiter Wocheneinheit +${pos9}</p>
          </div>
          <div class="priceBox">
            <h3>Einzelmaßnahmen für Förderungen ${pos10}</h3>
          </div>
          <div class="priceFooter">
            <a class="priceLink">weitere Tätigkeiten auf Anfrage</a>
            <i>Preise können sich je nach zeitlichem oder erhötem Aufwand ändern.</i>
          </div>
        </div>
      </div>
    `;
  }

function aboutMeTemplate() {

  return`
    <div class="meTxt">
    <h3>Titel für diesen Absatz</h3>
      <p class="para1">
        Ich bin seit 2014 als Schornsteinfeger tätig und hab im Jahr 2023 erfolgreich meine Meisterprüfung abgeschlossen. 
      </p>
      <p class="para2">
        Mein Interesse an den Themen Sanierung, Energiewende und Nachhaltigkeit veranlasste mich, wärend meiner Meisterausbildung 
        auch die Qualifikation als Gebäudeenergieberater zu erwerben. Ein Jahr später entschied ich mich mein eigenes Unternehmen zu gründen, 
        das seit dem 15. Juli 2024 für meine Kunden geöffnet ist.
      </p>
      <p>
        Für Mitte 2025 plane ich ebenfalls einen eigenen Bezirk asl Schornsteinfegermeister zu Übernehmen.
      </p>
      <p>
        Mein privates Glück habe ich als Ehemann und Vater zweier wundervollen Töchter gefunden. Als Familie verbringen wir viel Zeit in unserem 
        Kleingarten um unsere Energie wieder aufzutanken. Zum Ausgleich mache ich Musik und fahre gerne mal Motorrad.
      </p>
    </div>
  `;
}