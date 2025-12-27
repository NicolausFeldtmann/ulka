<template>
    <div class="gasContent">
        <div class="centerSection">
            <div class="imgAreaGas"></div>
            <div class="centerContent">
                <h2>Abgaswege- überprüfung nach KÜO</h2>
                <div class="txtArea">
                    <div class="txt">
                        <h3>Überprüfung ortsfester Feuerungsanlagen</h3>
                        <p>
                            Ortsfeste Feuerungsanlagen mit Abgasleitung unterliegen der 
                            regelmäßigen Messpflicht gemäß Anlage 1 der Kehr- und 
                            Überprüfungsordnung (KÜO). Als Eigentümer oder Eigentümerin 
                            sind Sie verpflichtet, diese Überprüfungen innerhalb des im 
                            Feuerstättenbescheid festgelegten Zeitraums durchführen zu 
                            lassen. Dieser Bescheid wird Ihnen von Ihrem oder Ihrer 
                            bevollmächtigten Bezirksschornsteinfeger/in ausgestellt.
                        </p>
                    </div>
                    <div class="txt">
                        <h3>Ihre Pflicht als Eigentümer/in</h3>
                        <ul>
                            <li>
                                <b>Durchführung der Arbeiten nach KÜO: </b>
                                Sie müssen sicherstellen, dass die notwendigen Messungen und 
                                Überprüfungen fristgerecht durchgeführt werden.
                            </li>
                            <li>
                                <b>Nachweis der sicheren Betriebsweise: </b>
                                Nach der Überprüfung müssen Sie belegen, dass Ihre Anlage 
                                sicher betrieben wird.
                            </li>
                        </ul>
                    </div>
                    <div class="txt">
                        <h3>Unser Serviceangebot</h3>
                        <p>
                            Wir bieten Ihnen einen umfassenden Service zur Erfüllung dieser Anforderungen:
                        </p>
                        <ul>
                            <li>
                                <b>Professionelle Überprüfung: </b>
                                Wir übernehmen die erforderlichen Messungen und Überprüfungen 
                                Ihrer Feuerungsanlagen
                            </li>
                            <li>
                                <b>Erbringung der notwendugen Nachweise: </b>
                                Wir kümmern uns um die Erbringung der notwendigen 
                                Nachweise über die sichere Betriebsweise Ihrer Anlage.
                            </li>
                        </ul>
                        <p>
                            Bitte sprechen Sie uns an, damit wir alle weiteren Schritte 
                            und Details gemeinsam besprechen können. Wir stehen Ihnen 
                            mit unserer Expertise zur Seite und sorgen dafür, dass 
                            Ihre Anlage den gesetzlichen Anforderungen entspricht.
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
        name: "GasMeasurment"
    }
</script>

<style>
    .gasContent{
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

    .txtArea{
        display: flex;
        flex-direction: column;
        align-items: baseline;
    }

    .imgAreaGas{
        background-image: url(./../../assets/img/ruler.png);
        height: 200px;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 75%;
        border-top-left-radius: 35px;
        border-top-right-radius: 35px;
    }
</style>