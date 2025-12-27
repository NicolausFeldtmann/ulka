<template>
    <div class="smokeContent">
        <div class="centerSection">
            <div class="imgAreaSmoke"></div>
            <div class="txtArea">
                <h2>Rauchmelder sind Lebensretter</h2>
                <div class="txt">
                    <h3>Rauchwarnmelderpflicht in Deutschland</h3>
                    <p>
                        In allen Bundesländern Deutschlands ist die Rauchwarnmelderpflicht 
                        nun auch für Bestandsgebäude verpflichtend. Besonders in Hamburg 
                        gibt es seit dem 01.01.2011 klare Vorgaben: Sämtliche Schlaf- und 
                        Kinderzimmer sowie alle Flure, die als Rettungsweg dienen, müssen 
                        mit Rauchwarnmeldern ausgestattet sein. Diese Regelung zielt darauf ab, 
                        die Sicherheit der Bewohner zu erhöhen und im Brandfall frühzeitig 
                        zu alarmieren.
                    </p>
                </div>
                <div class="txt">
                    <h3>Unser Serviceangebot</h3>
                    <p>
                        Um Sie bei der Einhaltung dieser Vorschrift zu unterstützen, 
                        bieten wir Ihnen einen umfassenden Service für die Ausstattung 
                        Ihrer Wohnungen und Häuser mit hochwertigen Rauchwarnmeldern. 
                        Unsere Leistungen beinhalten:
                    </p>
                    <ul>
                        <li>
                            <b>Beratung und Planung: </b>Wir helfen Ihnen, die richtigen 
                            Rauchwarnmelder für Ihre Räumlichkeiten zu wählen.
                        </li>
                        <li>
                            <b>Installation: </b>Fachgerechte Montage der Rauchwarnmelder an den 
                            empfohlenen Stellen.
                        </li>
                        <li>
                            <b>Wartung: </b>Jährliche Inspektionen gemäß den Herstellerangaben, 
                            die sorgfältig dokumentiert werden, um optimalen Schutz zu 
                            gewährleisten.
                        </li>
                        <li>
                            <b>Reperatur und Austausch: </b>Bei Bedarf übernehmen wir die 
                            Reparatur und den Austausch defekter Melder.
                        </li>
                        <p>
                            Durch unsere Dienstleistungen sichern wir eine schnelle 
                            Reaktionsmöglichkeit im Brandfall für Sie und Ihre Mieter. 
                            Darüber hinaus garantieren wir eine schnelle Mangelbehebung, 
                            sollten Probleme mit den Rauchwarnmeldern auftreten.
                        </p>
                    </ul>
                </div>
                <div class="txt">
                    <h3>Qualität unserer Rauchwarnmelder</h3>
                    <p>
                       Die von uns installierten Rauchwarnmelder sind mit dem <b>Q-Label</b> 
                       ausgezeichnet. Dieses Siegel bestätigt, dass die Rauchwarnmelder 
                       höhere Standards erfüllen, als die DIN als Mindestanforderung 
                       vorschreibt. So können Sie sicher sein, dass Sie sich auf die 
                       Qualität und Zuverlässigkeit unserer Produkte verlassen können. 
                    </p>
                </div>
                <div class="txt">
                    <h3>Zertifizierung</h3>
                    <p>
                        Unsere Zertifizierung nach <b>DIN 14676</b> unterstreicht unsere Kompetenz und 
                        Zuverlässigkeit in der Installation und Wartung von Rauchwarnmeldern. 
                        Dies garantiert Ihnen, dass wir alle relevanten Normen und Standards 
                        einhalten, um die Sicherheit in Ihrem Zuhause zu maximieren.
                        <br>
                        Vertrauen Sie unserem Fachwissen und unserem Engagement für Ihre Sicherheit.
                    </p>
                </div>
                <div class="txt">
                    <h3>Kontaktieren Sie uns</h3>
                    <p>
                        Bitte zögern Sie nicht, uns zu kontaktieren, wenn Sie Fragen haben 
                        oder weiterführende Informationen wünschen. Wir stehen Ihnen 
                        jederzeit gerne zur Verfügung, um Ihre Anliegen zu besprechen 
                        und Ihnen ein individuelles Angebot zu erstellen.
                    </p>
                    <router-link class="link" to="/contact">Zum Kontakt</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SmokeDetector"
    }
</script>

<style>
    .smkokeContent{
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

    .imgAreaSmoke{
        background-image: url(./../../assets/img/smoke.png);
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