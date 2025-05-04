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

function getConsulTemplate() {

  return`
    <div class="conContent">
      <h2>Energieberatung</h2>
      <div class="conTxt">
        <h3>Was macht ein Gebäudeenergieberater eigentlich?</h3>
        <p class="conPara">
          In der heutigen Zeit ist es eine Herrausforderung beim Thema Haussanierung den Überblick zu behalten.
        </p>
        <p class="conPara">
          Förderung, Gesetze und und technische Standarts unterliegen ständigen Veränderungen. 
          Zudem kusieren Fehlinformationen über Anlagetechnik und was es schwierig macht, die Warheit zu erkennen. 
        </p>
        <p class="conPara">
          Um in diesem Chaos Klarheit zu schaffen und ihnen als Kunden fachgerechte Informationen zu bieten, stehe ich ihnen als Energieberater zur Verfügung.
        </p>
        <p class="conPara">
          Darüber hinaus haben Sie die Möglichkeit durch eine Zusammenarbeit mit mir, als gelisteten Energie-Effiziens-Experten ihre 
          Sanierungsmßnahmen staatlich föderfähig zu machen und so Geld zu sparren.
        </p>
      </div>
    </div>
  `;
}