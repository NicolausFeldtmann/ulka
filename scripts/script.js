function init() {
    includeHTML();
    renderInfoTxt();
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  }

  function renderInfoTxt() {
    let contentRef = document.getElementById('infoTxt');
    contentRef.innerHTML = "";
    contentRef.innerHTML += getInfoTemplate();
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