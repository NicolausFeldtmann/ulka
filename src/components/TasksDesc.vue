<template>
    <div class="taskContent">
        <div class="centerSection">
            <div class="imgArea"></div>
            <div class="centerSection">
                <div class="centerContent">
                    <h2>Der Schornsteinfeger</h2>
                    <div class="txtArea">
                        <div class="txt">
                            <h3>Einführung</h3>
                            <p>
                                Im Interesse der Betriebs- und Brandsicherheit von Feuerstätten, des Umweltschutzes
                                und der Energieeinsparung hat der Staatspezifische Vorgaben erlassen. Diese betreffen 
                                die Reinigung und Überprüfung von Schronsteinen, Abgasleitungen, Feuerstätten, Rauch- 
                                und Abgasrohren sowie Lüftungsanlagen. In einigen Bundesländern zählen auch 
                                Dunstabzugshauben dazu. Diese Maßnahmen sind entscheidend, um die Sicherheit zu 
                                gewährleisten und die Umweltbelastung zu minimiren. 
                            </p>   
                        </div>
                        <div class="txt">
                            <h3>Erfolge des Schornsteinfegerhandwerks</h3>
                            <p>
                                Die Arbeit des Schornsteinfegerhandwerks zeigt beachtliche Erfolge. So wurden
                                im Jahr 2001 insgesammt 1.100.000 Mängel an bestehenden und 257.000 Mängel an 
                                neuen oder geänderten Feuerungsanlagen aufgedeckt. zudem wurde bei 261.000 
                                Gasfeuerungsanlagen eine gefährliche Kohlenmonoxid-Konzentration nachgewiesen 
                                und abgestellt.
                            </p>
                        </div>
                        <div class="txt">
                            <h4>Einspareungen und Umweltschut</h4>
                            <p>
                                Die Überprüfungen fanden im Jahr führten im Jahr 2001 zu einer Einsparung von
                                fast 102.000.000 Litern Heizöl und 59.000.000 Kubikmetern Erdgas. Diese Einsparung
                                resultiert in einer Reduktion von 377.000 Tonnen Kohlenmonoxid, 307 Tonnen 
                                Stickoxiden und 303 Tonne Schwefeldioxiden in häuslichen Feuerungsanlagen.  
                            </p>
                        </div>
                        <div class="txt">
                            <h3>Aufgaben des Schornsteinfegerhandwerks</h3>
                            <p>Das Schornsteinfegerhandwerk erfüllt eine Vielzahl von Aufgaben:</p>
                            <ul>
                                <li><b>Brandverhütung:</b>Regelmäßige Kontrolle zur rechtzeitigen Erkennung von Brandgefahren.</li>
                                <li><b>Sicherheit:</b>Gewährleistung der sicheren Funktion von Feuerungsanlagen.</li>
                                <li><b>Umweltschutz:</b>Reduzierung der Schadstoffemissionen</li>
                                <li><b>Energie- und Kosteneinsparung:</b>optimale einstellung von Heizungsanlagen zur Minimirung des Brennstoffverbrauchs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TasksDesc"
    }
</script>
<style>
    .taskContent{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .centerSection{
        background-color: rgb(184, 192, 119);
        max-width: 1440px;
        border-radius: 35px;
    }

    .centerContent{
        display: flex;
        justify-content: space-between;
        padding: 28px 0px 28px 0px;
    }

    .imgArea{
        background-image: url(./../assets/img/work1.png);
        height: 200px;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 75%;
        border-top-left-radius: 35px;
        border-top-right-radius: 35px;
    }

    .txtArea{
        display: flex;
        flex-direction: column;
        align-items: baseline;
    }

    .txt{
        display: flex;
        flex-direction: column;
        align-items: baseline;
        text-align: left;
    }
</style>