<template>
    <div class="chimneyContent">
        <div class="centerSection">
            <div class="imgArea"></div>
            <div class="centerContent">
                <h2>Reinigung von Schornsteinen</h2>
                <div class="txtArea">
                    <div class="txt">
                        <h3>Die Bedeutung der Schornseinreinigung</h3>
                        <p>
                            Die Reinigung von Schornsteinen ist eine wesentliche Maßnahme, 
                            um die Sicherheit und Effizienz Ihres Kaminsystems zu 
                            gewährleisten. Sie ist nicht nur gemäß der Kehr- und 
                            Überprüfungsordnung (KÜO) vorgeschrieben, sondern trägt 
                            auch dazu bei, den Schornstein frei von Schmutz und 
                            möglichen Gefahren zu halten.
                        </p>
                    </div>
                    <div class="txt">
                        <h3>Warum ist Schornsteinreinigung wichtig?</h3>
                        <p>
                            <b>Brandsicherheit:</b> Die regelmäßige Reinigung verhindert 
                                die Ansammlung von Ruß und anderen brennbaren Materialien 
                                im Schornstein. Diese Ablagerungen können leicht Feuer 
                                fangen und zu einem gefährlichen Kaminbrand führen.
                        </p>
                        <p>
                            <b>Freihalten von Blockaden:</b> In den Frühlings- und 
                            Sommermonaten besteht die Gefahr, dass sich Wespennester 
                            oder Vogelnester im Schornstein ansiedeln. Diese Blockaden 
                            können das Austreten von Rauchgasen behindern, was zu 
                            einer gefährlichen Ansammlung von Kohlenmonoxid in 
                            Ihrem Zuhause führen kann, sobald der Kamin wieder in 
                            Betrieb genommen wird.
                        </p>
                    </div>
                    <div class="txt">
                        <h3>Unsere Dienstleisungen</h3>
                        <p>
                            Wir bieten Ihnen umfassende Diensleisungen rund um die Schornsteinreinigung an:
                            <ul>
                                <li>
                                    <b>Schornsteinkehrungen:</b> Gemäß den Vorgaben im 
                                    Feuerstättenbescheid übernehmen wir die vorgeschriebenen 
                                    Schornsteinkehrungen sorgfältig und zuverlässig.
                                </li>
                                <li>
                                    <b>Zusätzliche Reinigungsarbeiten:</b> Neben der 
                                    Standardkehrung bieten wir auch zusätzliche Dienste an, 
                                    wie die Reinigung des Rauchrohres und des Kamins. 
                                    Diese Dienstleistungen helfen, die Effizienz Ihres 
                                    Heizsystems zu verbessern und seine Lebensdauer zu 
                                    verlängern.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div class="txt">
                        <h3>Vorteile unserer Dienstleisungen</h3>
                        <p>
                            <ul>
                                <li>
                                    <b>Fachkunfige Ausführung:</b> Unsere Mitarbeiter sind geschult
                                    und erfahren, um alle Arbeiten sicher und effizient durchzuführen.
                                </li>
                                <li>
                                    <b>Prävention:</b> Durhc regelmäßige Reinigung beugen Sie teuren
                                    Reperaturen und möglichen Gefahren vor.
                                </li>
                                <li>
                                    <b>Optimale Leisung</b> Ein sauberer Kamin arbeitet effitient und 
                                    verbrauchen weniger Brennstoff.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div class="txt">
                        <p>
                            Wir stehen Ihnen gerne zur Verfügung, um Ihre Fragen zu 
                            beantworten und einen Termin für die Reinigung Ihres 
                            Schornsteins zu vereinbaren. Lassen Sie uns gemeinsam 
                            für die Sicherheit und Effizienz Ihres Kamins sorgen!
                        </p>
                    </div>
                    <router-link class="link" to="/contact">Kontacktieren Sie uns!</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChimneyCleaning"
    }
</script>

<style>
    .chimneyContent{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .centerSection{
        background-color: rgb(184, 192, 119);
        width: 80%;
        max-width: 1440px;
        height: 80%;
        border-radius: 35px;
    }

    .centerContent{
        display: flex;
        justify-content: space-between;
        padding: 28px 12px 28px 12px;
    }

    .imgArea{
        background-image: url(./../../assets/img/chimney2.png);
        height: 200px;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 75%;
        border-top-left-radius: 35px;
        border-top-right-radius: 35px;
    }

    .link{
        font-size: 28px;
        text-decoration: none;
        color: rgb(53, 104, 53);
    }

    .link:hover{
        color: rgb(64, 155, 64);
    }
</style>